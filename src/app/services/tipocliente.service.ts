import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoclienteService {

  urlTipoClienteAll = environment.urlAPI + '/api/clienti/tipicliente';

  constructor(private http: HttpClient) { }

  
  getAllTipoCliente() {
    return this.http.get<string[]>(this.urlTipoClienteAll);
  }
}
