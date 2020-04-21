import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from '../models/user';
import { AuthenticationService } from '../service/authentication.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title= "Home";
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

constructor( 
  private authenticationService: AuthenticationService,
  private userService: UserService){
   
  }
ngOnInit(){
  // this.loadAllUsers();
}
ngOnDestroy() {
  // unsubscribe to ensure no memory leaks
 // this.currentUserSubscription.unsubscribe();
}
}
