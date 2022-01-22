import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FatturaCliente } from '../classes/fattura-cliente';
import { IStatofattura } from '../interfaces/istatofattura';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';

@Component({
  selector: 'app-new-fattura',
  templateUrl: './new-fattura.component.html',
  styleUrls: ['./new-fattura.component.css']
})
export class NewFatturaComponent implements OnInit {

  newFattura!: FatturaCliente;
  stato!: IStatofattura;

  constructor(
    private fattureService: FattureService,
    private route: ActivatedRoute,
    private router: Router,
    private statoService: StatofatturaService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.newFattura = new FatturaCliente();
      }
    });
    this.getStato();
  }

  getStato() {
   this.statoService.getAllStatoFatt().subscribe(stato => this.stato = stato.content)
  }

  creaFattura() {
    this.route.params.subscribe(element => {
      if (element.id) {
        let data = new Date();
        this.newFattura.data = data.getFullYear() + "-" + data.getMonth() + "-" + ('0' + data.getDate()).slice(-2) + "T" + ('0' + data.getHours()).slice(-2) + ":" + ('0' + data.getMinutes()).slice(-2) + ":" + data.getSeconds() + "." + data.getMilliseconds() + "+00:00";
        this.newFattura.cliente.id = parseInt(element.id);
        if (this.newFattura.stato.nome == 'PAGATA') {
          this.newFattura.stato.id = 1;
        }
        else {
          this.newFattura.stato.id = 2;
        }
        console.log(this.newFattura);
        this.fattureService.createFattura(this.newFattura).subscribe(res => {
          this.router.navigate(['fatture', res.id, 'dettaglio']);
        });
      }
    });
  }
}
