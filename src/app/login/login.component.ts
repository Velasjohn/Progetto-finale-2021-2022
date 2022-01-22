import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUtente } from '../interfaces/iutente';
import { RouteguardService } from '../services/routeguard.service';
import { UtenteService } from '../services/utente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  allUtenti!:IUtente[];
  username!:string;
  password!:string;
  logUser:boolean=false;
  messaggio:string='';

  constructor(
    private utenteService: UtenteService,
    private RouteGuard: RouteguardService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  async logIn(){
    console.log(this.username);
    console.log(this.password);

    try {
      await this.takeBearerAuth();

    }catch(err){
      console.log(err);
      this.messaggio='Username o Password errati!';
    }

    console.log(this.utenteService.getToken());
  }

  takeBearerAuth(){
    return new Promise<void>((resolve,reject) => {
      this.utenteService.logIn(this.username,this.password)?.subscribe(res=>{
        console.log('NO');
        this.utenteService.setBearer(res.accessToken);
        if(this.utenteService.getToken()){
          console.log(this.utenteService.getToken());
          this.RouteGuard.setLogin();
          this.router.navigate(['/clienti']);
        }
        resolve();
      },err=>{
        reject(err);
      }
      );
    })
  }
}
