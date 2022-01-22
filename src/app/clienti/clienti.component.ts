import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  clienti: IClienti[] = [];

  constructor(private clientiService: ClientiService, private router: Router) { }

  ngOnInit(): void {
    this.clientiService.getAllClienti().subscribe(res => this.clienti = res.content);
  }

  dettaglioCliente(item: IClienti) {
    this.router.navigate(['clienti', item.id, 'dettaglio']);
  }

  eliminaCliente(item: IClienti) {
    this.clientiService.removeCliente(item).subscribe(res => {
      this.clientiService.getAllClienti().subscribe(res => this.clienti = res.content)
    });
  }
  
  nuovoCliente(){
    this.router.navigate(['clienti/nuovo']);
  }

  modificaCliente(item: IClienti) {
    this.router.navigate(['clienti', item.id, 'modifica']);
  }

  fattureCliente(item: IClienti) {
    this.router.navigate(['clienti', item.id, 'fatture']);
  }
}
