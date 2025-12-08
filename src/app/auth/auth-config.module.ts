import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';
import { local_environment } from '../../environments/environment';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: local_environment.auth0DomainURL,
            redirectUrl: window.location.origin,
            clientId: local_environment.auth0ClientID,
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            secureRoutes: [local_environment.apiHostURL+'/'],
            customParamsAuthRequest: {
              audience: local_environment.apiHostURL
            }
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
