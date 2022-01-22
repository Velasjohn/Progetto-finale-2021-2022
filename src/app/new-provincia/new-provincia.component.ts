import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProvinciaClass } from '../classes/provincia-class';
import { ProvinceService } from '../services/province.service';

@Component({
  selector: 'app-new-provincia',
  templateUrl: './new-provincia.component.html',
  styleUrls: ['./new-provincia.component.css']
})
export class NewProvinciaComponent implements OnInit {

  newProvincia = {
    nome: '',
    sigla: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private provinceService: ProvinceService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      this.newProvincia = new ProvinciaClass();
    })
  }

  salvaProvincia() {
    this.provinceService.createProvincia(this.newProvincia).subscribe(res => {
      alert('Provincia creata con successo!');
    })
  }

  Indietro() {
    this.router.navigate(['comuni/nuovo']);
  }
}
