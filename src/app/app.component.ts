import { AfterViewChecked, Component } from '@angular/core';
import { RouteguardService } from './services/routeguard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  log: boolean = this.RoutGuard.getLogin();
  title = 'ProgettoFinale';

  constructor(private RoutGuard: RouteguardService) { }

  ngAfterViewChecked() {
    this.log = this.RoutGuard.getLogin();
  }
}
