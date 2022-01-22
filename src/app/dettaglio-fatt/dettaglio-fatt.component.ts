import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-dettaglio-fatt',
  templateUrl: './dettaglio-fatt.component.html',
  styleUrls: ['./dettaglio-fatt.component.css']
})
export class DettaglioFattComponent implements OnInit {

  dettaglioFatt!: IFatture;

  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element =>{
      if (element.id) {
        this.fattureService.getFatture(element.id).subscribe(fattura => this.dettaglioFatt = fattura);
      }
    });
  }

  tutteFatture() {
    this.router.navigate(['clienti', this.dettaglioFatt.cliente.id, 'fatture'])
  }

}
