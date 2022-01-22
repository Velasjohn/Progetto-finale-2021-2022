import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientiComponent } from './clienti/clienti.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FattureComponent } from './fatture/fatture.component';
import { MyhttpInterceptor } from './myhttp.interceptor';
import { DettaglioComponent } from './dettaglio/dettaglio.component';
import { NewClienteComponent } from './new-cliente/new-cliente.component';
import { NewComuneComponent } from './new-comune/new-comune.component';
import { DettaglioFattComponent } from './dettaglio-fatt/dettaglio-fatt.component';
import { ModFatturaComponent } from './mod-fattura/mod-fattura.component';
import { NewProvinciaComponent } from './new-provincia/new-provincia.component';
import { FattureClienteComponent } from './fatture-cliente/fatture-cliente.component';
import { NewFatturaComponent } from './new-fattura/new-fattura.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientiComponent,
    LoginComponent,
    FattureComponent,
    DettaglioComponent,
    NewClienteComponent,
    NewComuneComponent,
    DettaglioFattComponent,
    ModFatturaComponent,
    NewProvinciaComponent,
    FattureClienteComponent,
    NewFatturaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyhttpInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
