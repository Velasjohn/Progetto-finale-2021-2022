import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClienti } from '../interfaces/iclienti';
import { IFatture } from '../interfaces/ifatture';
import { FattureService } from '../services/fatture.service';

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  fatture: IFatture[] = [];

  constructor(private fattureService: FattureService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(element =>{
      if (element.id) {
        this.fattureService.getFattureByCliente(element.id).subscribe(res => this.fatture = res.content);
      }
    });
  }

  nuovaFattura() {
    this.route.params.subscribe(element => {
      if(element.id){
        this.router.navigate(['fatture', element.id, 'nuova']);
      }
    })
    
  }
}
