import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { GlobalService } from '../service/global.service';
import { HttpClient } from '@angular/common/http';
import { AlertService} from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="Login"
  loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    currentUser: User;
    userNames;
    usersArray = []
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userdata: GlobalService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private httpClient: HttpClient
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
    //    this.getuserUrl().subscribe(response=>{
    //        console.log(response);
    //        this.userNames =response;
    //        localStorage.setItem('users',JSON.stringify(this.userNames));
    //    })
        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    
    onSubmit() {
       
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
    
   getuserUrl(){
       return this.httpClient.get(this.userdata.userApi);
   }
}
