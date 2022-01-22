import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FatturaClass } from '../classes/fattura-class';
import { FatturaCliente } from '../classes/fattura-cliente';
import { IApi } from '../interfaces/iapi';
import { IFatture } from '../interfaces/ifatture';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  urlFattureAll = environment.urlAPI + '/api/fatture?page=0&size=20&sort=id,DESC';
  urlFatture = environment.urlAPI + '/api/fatture/';
  urlStato = environment.urlAPI + '/api/fatture/stato/';
  urlFattByCliente = environment.urlAPI + '/api/fatture/cliente/'

  constructor(private http: HttpClient) { }

  getAllFatture() {
    return this.http.get<IApi>(this.urlFattureAll);
  }

  getFatture(id: number) {
    return this.http.get<IFatture>(this.urlFatture + id);
  }

  getFattureByCliente(id: number) {
    return this.http.get<IApi>(this.urlFattByCliente + id);
  }

  getStato(id: number) {
    return this.http.get<IApi>(this.urlStato + id);
  }

  removeFattura(fattura: IFatture) {
    return this.http.delete(this.urlFatture + fattura.id);
  }

  createFattura(fattura: FatturaCliente) {
    return this.http.post<FatturaCliente>(this.urlFatture, fattura);
  }

  updtateFattura(fattura: FatturaClass) {
    return this.http.put<FatturaClass>(this.urlFatture + fattura.id, fattura);
  }

}
