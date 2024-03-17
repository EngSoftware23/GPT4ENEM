import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (environment.USER  && Object.keys(environment.USER).length > 0) {
      return true;
    } else {
      this.router.navigate(['/login'])
      return false;
    }
  }
}
