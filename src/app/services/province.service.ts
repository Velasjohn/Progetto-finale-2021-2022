import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProvinciaClass } from '../classes/provincia-class';
import { IProvince } from '../interfaces/iprovince';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  urlProvinceAll = environment.urlAPI + '/api/province?page=0&size=20&sort=id,DESC';
  urlProvince = environment.urlAPI + '/api/province'


  constructor(private http: HttpClient) { }

  getAllProvince() {
    return this.http.get<IProvince>(this.urlProvinceAll);
  }

  createProvincia(provincia: any) {
    return this.http.post(this.urlProvince, provincia)
  } 
}
