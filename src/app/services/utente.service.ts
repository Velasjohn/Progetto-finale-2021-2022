import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IApi } from '../interfaces/iapi';
import { IUtente } from '../interfaces/iutente';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  urlUsers = environment.urlAPI + '/api/users?size=100000';
  urlSignUp = environment.urlAPI + '/api/auth/signup';
  urlLogIn = environment.urlAPI + '/api/auth/login';
  bearerAuth!: string;

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<IApi>(this.urlUsers);
  }

  signUp(item:IUtente){
    return this.http.post(this.urlUsers, item);
  }

  logIn(user:string, pass:string){
    return this.http.post<IUtente>(this.urlLogIn, {username:user, password:pass});
  }

  getToken():string {
    return this.bearerAuth;
  }

  setBearer(token: string) {
    this.bearerAuth = token;
  }
}
