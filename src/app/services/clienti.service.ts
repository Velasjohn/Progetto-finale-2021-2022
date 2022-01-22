import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClienteClass } from '../classes/cliente-class';
import { IApi } from '../interfaces/iapi';
import { IClienti } from '../interfaces/iclienti';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  urlClientiAll = environment.urlAPI + '/api/clienti?page=0&size=20&sort=id,desc';
  urlClienti = environment.urlAPI + '/api/clienti/'

  constructor(private http: HttpClient) { }

  getAllClienti() {
    return this.http.get<IApi>(this.urlClientiAll);
  }

  getCliente(id: number) {
    return this.http.get<IClienti>(this.urlClienti + id);
  }

  removeCliente(cliente: IClienti) {
    return this.http.delete(this.urlClienti + cliente.id);
  }

  createCliente(cliente: ClienteClass) {
    return this.http.post<ClienteClass>(this.urlClienti, cliente);
  }

  updateCliente(cliente: ClienteClass) {
    return this.http.put<ClienteClass>(this.urlClienti + cliente.id, cliente);
  }
}
