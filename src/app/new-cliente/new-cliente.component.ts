import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteClass } from '../classes/cliente-class';
import { IClienti } from '../interfaces/iclienti';
import { Comuni, IComuni } from '../interfaces/icomuni';
import { ClientiService } from '../services/clienti.service';
import { ComuniService } from '../services/comuni.service';
import { TipoclienteService } from '../services/tipocliente.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  tipo: string[] = [];
  comuni: Comuni[] = [];
  clienteMod!: IClienti;
  title: string = '';

  constructor(
    private clientiService: ClientiService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private tipoClienteService: TipoclienteService,
    private comuniService: ComuniService
    ) 
    
    { }

  ngOnInit(): void {
    this.route.params.subscribe(element =>{
      if (!element.id) {
        this.title = 'Nuovo Cliente';
        this.clienteMod = new ClienteClass();
      }
      else {
        this.title = 'Modifica Cliente';
        this.clientiService.getCliente(element.id).subscribe(cliente => this.clienteMod = cliente);
      }
    });
    this.getTipo(); 
    this.getComuni();
  }

  getTipo() {
    this.tipoClienteService.getAllTipoCliente().subscribe(tipo => this.tipo = tipo);
  }

  getComuni() {
    this.comuniService.getAllComuni().subscribe(comuni => this.comuni = comuni.content);
  }

  salvaCliente() {
    this.route.params.subscribe(element=> {
      if (!element.id) {
        this.clientiService.createCliente(this.clienteMod).subscribe(res => {
          this.router.navigate(['clienti']);
        });
      }
      else {
        this.clientiService.updateCliente(this.clienteMod).subscribe(res => {
          this.router.navigate(['clienti']);
        });
      }
    });
  }

  nuovoComune(){
    this.router.navigate(['comuni/nuovo']);
  }
}

