import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FatturaClass } from '../classes/fattura-class';
import { FatturaCliente } from '../classes/fattura-cliente';
import { Comuni } from '../interfaces/icomuni';
import { IFatture } from '../interfaces/ifatture';
import { IStatofattura } from '../interfaces/istatofattura';
import { ComuniService } from '../services/comuni.service';
import { FattureService } from '../services/fatture.service';
import { StatofatturaService } from '../services/statofattura.service';
import { TipoclienteService } from '../services/tipocliente.service';

@Component({
  selector: 'app-mod-fattura',
  templateUrl: './mod-fattura.component.html',
  styleUrls: ['./mod-fattura.component.css']
})
export class ModFatturaComponent implements OnInit {

  fatturaMod!: IFatture;
  stato!: IStatofattura[];
  tipo: string[] = [];
  comuni: Comuni[] = [];
  
  constructor(
    private fattureService: FattureService,
    private router: Router,
    private route: ActivatedRoute,
    private statoService: StatofatturaService,
    private tipoClienteService: TipoclienteService,
    private comuniService: ComuniService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.fattureService.getFatture(element.id).subscribe(fattura => this.fatturaMod = fattura);
      }
    })
    this.getStato();
    this.getTipo();
  }

  getStato() {
    this.statoService.getAllStatoFatt().subscribe(stato => this.stato = stato.content);
  }

  getTipo() {
    this.tipoClienteService.getAllTipoCliente().subscribe(tipo => this.tipo = tipo);
  }

  getComuni() {
    this.comuniService.getAllComuni().subscribe(comuni => this.comuni = comuni.content);
  }

  salvaFattura(){
    this.route.params.subscribe(element => {
      if (element.id) {
        this.fattureService.updtateFattura(this.fatturaMod).subscribe(res => {
          this.router.navigate(['fatture']);
        });
      }
    });
  }
}
