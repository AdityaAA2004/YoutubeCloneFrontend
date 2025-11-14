import { Component } from '@angular/core';
import {NgxFileDropEntry} from 'ngx-file-drop';
import {FileSystemFileEntry} from 'ngx-file-drop';
import {VideoService} from './video/video.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.css',
  standalone: false
})
export class UploadVideoComponent {
  public files: NgxFileDropEntry[] = [];
  fileUploaded: boolean = false;
  constructor(private videoService: VideoService,
              private router: Router) {
  }
  public dropped(files: Event | any) {
    this.files = files;
    console.log('Files length: ' + this.files.length);
    for (const droppedFile of files) {
      // Check if entry is a file
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          if (file.name.endsWith('.mp4')) {
            console.log('File dropped: ' + file.name);
            this.fileUploaded = true;
          }
          else {
            console.log('Invalid file type. Please upload an MP4 video.');
            this.fileUploaded = false;
          }
        });
        if (this.fileUploaded) {
          break;
        }
      } else {
        console.log('Dropped item is not a file.');
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }

  public onClickUploadVideo() {
    if (this.fileUploaded) {
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
      this.videoService.uploadVideo(fileEntry).subscribe({
        next: response => {
          console.log('Upload successful', response);
          this.router.navigateByUrl('/save-video-details/' + response.videoId)
        },
        error: error => {
          console.error('Upload failed', error);
        }
      });
    }
  }
}
