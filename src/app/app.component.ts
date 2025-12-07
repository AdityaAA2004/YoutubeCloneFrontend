import {Component, inject, OnInit} from '@angular/core';
import {LoginResponse, OidcSecurityService} from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'youtube_clone_frontend';
  private readonly oidcSecurityService = inject(OidcSecurityService);
  ngOnInit() {
    this.oidcSecurityService.checkAuth().subscribe((loginResponse: LoginResponse) => {
      const isAuthenticated = loginResponse.isAuthenticated;
      console.log('Is Authenticated:', isAuthenticated);
    });
  }
}
