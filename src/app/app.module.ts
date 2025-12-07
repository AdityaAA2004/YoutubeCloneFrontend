import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxFileDropModule} from 'ngx-file-drop';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {UploadVideoComponent} from './upload-video/upload-video.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {ZardButtonComponent} from '@shared/zardui_components/button/button.component';
import {ZardTableModule} from '@shared/zardui_components/table/table.module';
import {ZardInputDirective} from '@shared/zardui_components/input/input.directive';
import {MatFormField, MatOption, MatSelect} from '@angular/material/select';
import {MatChipGrid, MatChipInput, MatChipRow} from '@angular/material/chips';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {ZardToastComponent} from '@shared/zardui_components/toast/toast.component';
import {SaveVideoDetailsModule} from './save-video-details/save-video-details.module';
import { AuthConfigModule } from './auth/auth-config.module';
import {AuthModule} from 'angular-auth-oidc-client';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    NgxFileDropModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ZardButtonComponent,
    ZardTableModule,
    ZardInputDirective,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
    MatChipGrid,
    MatChipRow,
    MatChipInput,
    MatFormField,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ZardToastComponent,
    SaveVideoDetailsModule,
    AuthConfigModule,
    AuthModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
