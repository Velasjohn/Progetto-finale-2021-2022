import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  fatture: IFatture[] = [];
  filtro: string = '';

  constructor(
    private fattureService: FattureService, 
    private router: Router,
    ) 
    
    { }

  ngOnInit(): void {
    this.caricaFattura();
  }

  caricaFattura(){
    this.fattureService.getAllFatture().subscribe(res => this.fatture = res.content);
  }

  statoFattura(){
    if (this.filtro == 'PAGATA') {
      this.fattureService.getStato(1).subscribe(res => this.fatture = res.content);
    }
    else if (this.filtro == 'NON PAGATA') {
      this.fattureService.getStato(2).subscribe(res => this.fatture = res.content);
    }
    else {
      this.caricaFattura();
    }
  }

  dettaglioFattura(item: IFatture){
    this.router.navigate(['fatture', item.id, 'dettaglio']);
  }

  eliminaFattura(item: IFatture) {
    this.fattureService.removeFattura(item).subscribe(res => {
      this.fattureService.getAllFatture().subscribe(res => this.fatture = res.content);
    });
  }

  modificaFattura(item: IFatture) {
    this.router.navigate(['fatture', item.id, 'modifica']);
  }
}
