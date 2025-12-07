import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../data/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {Router} from '@angular/router';
import {VideoService} from '../services/video/video.service';
import {toast} from 'ngx-sonner';
import {GetVideoResponse} from '../types/GetVideoResponse';

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.css',
  standalone: false
})
export class SaveVideoDetailsComponent implements OnInit {
  private videoId: string = '';
  readonly videoTags = signal(['skyline', 'city', 'boston', 'diwali']);
  announcer = inject(LiveAnnouncer);
  videoMetadataFormGroup: FormGroup;
  selectedFile!: File;
  selectedFileName = '';
  videoUrl: string = ''; // Initialize as empty string
  thumbnailUrl: string = '';
  constructor(private dataService: DataService,
              private router: Router,
              private videoService: VideoService) {
    this.videoMetadataFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      videoStatus: new FormControl('PUBLIC', Validators.required),
      videoTags: new FormControl(this.videoTags())
    });
  }

  ngOnInit() {
    this.videoId = this.dataService.getVideoId();
    if (!this.videoId) {
      this.router.navigateByUrl('/');
      throw new Error('Video ID is required to save video details');
    }

    this.loadVideo();
  }

  private loadVideo() {
    this.videoService.getVideo(this.videoId).subscribe({
      next: (videoInfo) => {
        this.videoUrl = videoInfo.videoUrl;
      },
      error: (error) => {
        console.error('Error fetching video info:', error);
        toast.error('Failed to load video', {
          position: "bottom-center",
          closeButton: true
        });
      }
    });
  }

  removeTag(newTag: string) {
    this.videoTags.update(tags => {
      const index = tags.indexOf(newTag);
      if (index < 0) {
        return tags;
      }

      tags.splice(index, 1);
      this.announcer.announce(`removed ${newTag} from template form`);
      return [...tags];
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.videoTags.update(tags => [...tags, value]);
      this.announcer.announce(`added ${value} to template form`);
    }
    event.chipInput!.clear();
  }

  onFileSelected(event: Event) {
    this.selectedFile = (event.target as HTMLInputElement).files![0];
    this.selectedFileName = this.selectedFile.name;
  }

  onUpload() {
    console.log('File thumbnail selected:', this.selectedFile);
    console.log('File thumbnail name:', this.selectedFileName);
    this.videoService.uploadThumbnail(this.selectedFile, this.videoId)
      .subscribe({
        next: (data) => {
          toast.success('Thumbnail uploaded successfully!', {
            position: "bottom-center",
            closeButton: true
          });
          this.thumbnailUrl = data.thumbnailUrl;
        }
      });
  }

  saveVideo() {
    const videoMetadata: GetVideoResponse = {
      id: this.videoId,
      title: this.videoMetadataFormGroup.get('title')?.value,
      description: this.videoMetadataFormGroup.get('description')?.value,
      videoUrl: this.videoUrl,
      tags: this.videoTags(),
      videoStatus: this.videoMetadataFormGroup.get('videoStatus')?.value,
      thumbnailUrl: this.thumbnailUrl
    }
    this.videoService.saveVideoDetails(videoMetadata).subscribe({
      next: (data) => {
        toast.success('Video details saved successfully!', {
          position: "bottom-center",
          closeButton: true
        });
      },
      error: (error) => {
        console.error('Error saving video details:', error);
        toast.error('Failed to save video details', {
          position: "bottom-center",
          closeButton: true
        });
      }
    });
  }
}
