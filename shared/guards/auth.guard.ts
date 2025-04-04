import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    const token = localStorage.getItem('accessToken');

    if (token) {
      return true;
    } else {
      this.router.navigate(['/auth/login']); // Redirect to login route
      return false;
    }
  }
}
