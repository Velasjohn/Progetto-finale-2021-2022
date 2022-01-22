import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ComuneClass } from '../classes/comune-class';
import { IComuni } from '../interfaces/icomuni';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  urlComuniAll = environment.urlAPI + '/api/comuni?page=0&size=20&sort=id,DESC';
  urlComuni = environment.urlAPI + '/api/comuni'

  constructor(private http: HttpClient) { }

  getAllComuni() {
    return this.http.get<IComuni>(this.urlComuniAll);
  }

  createComune(comune: any) {
    return this.http.post(this.urlComuni, comune);
  }
}
