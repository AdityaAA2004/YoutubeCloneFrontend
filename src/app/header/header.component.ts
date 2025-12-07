import {Component, OnInit} from '@angular/core';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: false
})
export class HeaderComponent implements OnInit{
  isAuthenticated = false;
  constructor(private oidcSecurityService: OidcSecurityService) {

  }

  ngOnInit() {
    this.oidcSecurityService.isAuthenticated$.subscribe(
      (response) => {
        this.isAuthenticated = response.isAuthenticated;
      }
    );
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoffAndRevokeTokens();
  }
}
