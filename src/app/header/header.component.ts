import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouteguardService } from '../services/routeguard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private RouteGuard: RouteguardService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.RouteGuard.setLogin();
    this.router.navigate(['/']);
  }
}
