/*
Guard Class(Guard Unauthorized user to enter secure area of website)
Name - Shiv Rana
Student Id - 300990505
Date - Mar-30-2019
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  canActivate(): boolean {
    if(this.authService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
