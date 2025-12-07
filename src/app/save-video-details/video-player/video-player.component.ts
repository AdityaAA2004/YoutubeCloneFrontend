import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {VgApiService} from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
  standalone: false
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  @Input() videoUrl: string = '';

  constructor() {}

  ngOnInit() {
    console.log('Video URL in Video Player Component:', this.videoUrl);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoUrl']) {
      console.log('Video URL changed:', this.videoUrl);
      this.videoUrl = changes['videoUrl'].currentValue;
    }
  }
}
