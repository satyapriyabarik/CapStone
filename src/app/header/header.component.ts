import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { User } from '../models/user';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { UserService } from '../service/user.service';
import {GlobalService } from '../service/global.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 title="Capstone Project";
 currentUser: User;
 currentUserSubscription: Subscription;
   users: User[] = [];
   collapsed = true;
 constructor( private router: Router,
   private globalService:GlobalService,
   private authenticationService: AuthenticationService,
   private userService: UserService
 ) { 
   this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
     this.currentUser = user;
     if(user!=null){
       this.globalService.currentUser= user.firstName +" " +user.lastName;
     }
 });  
 }

    toggleCollapsed(): void {
         this.collapsed = !this.collapsed;
    }
 ngOnInit() {
  // this.loadAllUsers();
  
}

ngOnDestroy() {
   // unsubscribe to ensure no memory leaks
   this.currentUserSubscription.unsubscribe();
}

 logout() {
   this.authenticationService.logout();
   this.collapsed = !this.collapsed;
   this.globalService.currentUser ='Guest';
   alert('You are successfully logged out !!!');
   this.router.navigate(['/login']);
}

}
