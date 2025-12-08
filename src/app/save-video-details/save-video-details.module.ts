// create module for save-video-details feature
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveVideoDetailsComponent } from './save-video-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { A11yModule } from '@angular/cdk/a11y';
import {VideoPlayerComponent} from './video-player/video-player.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {ZardButtonComponent} from '@shared/zardui_components/button/button.component';
import {ZardInputDirective} from '@shared/zardui_components/input/input.directive';

@NgModule({
  declarations: [
    SaveVideoDetailsComponent,
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    A11yModule,
    VgCoreModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgControlsModule,
    ZardButtonComponent,
    ZardInputDirective
  ],
    exports: [
        SaveVideoDetailsComponent,
        VideoPlayerComponent
    ]
})
export class SaveVideoDetailsModule { }
