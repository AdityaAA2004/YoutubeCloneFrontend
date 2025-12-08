import { Routes } from '@angular/router';
import {UploadVideoComponent} from './upload-video/upload-video.component';
import {SaveVideoDetailsComponent} from './save-video-details/save-video-details.component';
import {VideoDetailComponent} from './video-detail/video-detail.component';

export const routes: Routes = [
  {
    path: 'upload', component: UploadVideoComponent
  },
  {
    path: 'save-video-details', component: SaveVideoDetailsComponent
  },
  {
    path: 'video', component: VideoDetailComponent
  }
];
