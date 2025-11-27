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
import {SaveVideoDetailsComponent} from './save-video-details/save-video-details.component';
import {MatFormField, MatOption, MatSelect} from '@angular/material/select';
import {MatChipGrid, MatChipInput, MatChipRow} from '@angular/material/chips';

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
    MatFormField
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  declarations: [
    AppComponent,
    UploadVideoComponent,
    HeaderComponent,
    SaveVideoDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
