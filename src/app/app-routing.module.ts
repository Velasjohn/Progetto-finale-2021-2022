import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientiComponent } from './clienti/clienti.component';
import { DettaglioFattComponent } from './dettaglio-fatt/dettaglio-fatt.component';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { FattureComponent } from './fatture/fatture.component';
import { LoginComponent } from './login/login.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewComuneComponent } from './new-comune/new-comune.component';
import { ModFatturaComponent } from './mod-fattura/mod-fattura.component';
import { NewProvinciaComponent } from './new-provincia/new-provincia.component';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';
import { RouteguardService } from './services/routeguard.service';

const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'clienti', 
    component: ClientiComponent,
    canActivate: [RouteguardService]
  },
  {
    path: 'fatture', 
    component: FattureComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'clienti/:id/dettaglio',
    component: DettaglioComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'clienti/nuovo',
    component: NewClienteComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'clienti/:id/modifica',
    component: NewClienteComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'clienti/:id/fatture',
    component: FattureClienteComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'comuni/nuovo',
    component: NewComuneComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'province/nuova',
    component: NewProvinciaComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'fatture/:id/dettaglio',
    component: DettaglioFattComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'fatture/:id/nuova',
    component: NewFatturaComponent,
    canActivate: [RouteguardService]
  },
  { 
    path: 'fatture/:id/modifica',
    component: ModFatturaComponent,
    canActivate: [RouteguardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
