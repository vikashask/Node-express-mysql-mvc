import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(): boolean {
        if (sessionStorage.getItem('token') && sessionStorage.getItem('token').length > 0) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}