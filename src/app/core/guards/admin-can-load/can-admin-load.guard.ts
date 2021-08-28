import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanAdminLoadGuard implements CanLoad {
  constructor(private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //console.log("Admin guard works!")
    const isAdmin = true;
    if(isAdmin) {
      //console.log("I AM ADMIN, I CAN ENTER")
      return true;
    }

    return this.router.createUrlTree(["/no-admin-permission"])

  }
}
