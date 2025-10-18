import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgxFileDropModule} from 'ngx-file-drop';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import { RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {AppComponent} from './app.component';
import {UploadVideoComponent} from './upload-video/upload-video.component';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    NgxFileDropModule,
    CommonModule,
    MatButtonModule,
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
