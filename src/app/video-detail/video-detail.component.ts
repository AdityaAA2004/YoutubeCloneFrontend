import { Component } from '@angular/core';
import {DataService} from '../data/data.service';
import {VideoService} from '../services/video/video.service';
import {SaveVideoDetailsModule} from '../save-video-details/save-video-details.module';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-video-detail',
  imports: [
    SaveVideoDetailsModule,
    NgIf
  ],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent {
  videoId!: string;
  videoUrl: string = '';
  videoTitle: string = '';
  videoDescription: string = '';
  videoTags: string[] = [];
  todayDate: Date = new Date();
  videoLoaded: boolean = false;
  constructor(private dataService: DataService,
              private videoService: VideoService) {
    this.videoId = this.dataService.getVideoIdForViewVideo();
    this.videoService.getVideo(this.videoId).subscribe({
      next: (response) => {
        this.videoUrl = response.videoUrl;
        this.videoTitle = response.title;
        this.videoDescription = response.description;
        this.videoTags = response.tags;
        this.videoLoaded = true;
      },
      error: (error) => {
        console.error('Error fetching video details:', error);
      }
    })
  }

}
