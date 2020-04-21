import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { GlobalService } from '../service/global.service';

@Injectable({ providedIn: 'root' })
export class ModGuard implements CanLoad {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private globalService: GlobalService
    ) {}
    canLoad(route: Route): boolean {
       let url = `/${route.path}`;

     return this.checkLogin(url);
      }
      checkLogin(url: string): boolean {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser && this.globalService.isProductFlag==true) {  return true; }
        else{ this.router.navigate(["/about"]);return false; }
      }
}

