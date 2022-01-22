import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate{

  login: boolean = false;

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.login;
  }

  setLogin() {
    this.login = !this.login;
  }

  getLogin(){
    return this.login;
  }
}
