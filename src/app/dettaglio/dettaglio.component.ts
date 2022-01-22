import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { ClientiService } from '../services/clienti.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent implements OnInit {

  dettaglio!: IClienti;

  constructor(private clientiService: ClientiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element => {
      if (element.id) {
        this.clientiService.getCliente(element.id).subscribe(cliente => this.dettaglio = cliente);
      }
    })
  }

  tutteFatture() {
    this.router.navigate(['clienti', this.dettaglio.id ,'fatture'])
  }

}
