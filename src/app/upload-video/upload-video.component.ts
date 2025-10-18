import { Component } from '@angular/core';
import {NgxFileDropEntry} from 'ngx-file-drop';
import {FileSystemFileEntry} from 'ngx-file-drop';
import {VideoService} from './video/video.service';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrl: './upload-video.component.css',
  standalone: false
})
export class UploadVideoComponent {
  public files: NgxFileDropEntry[] = [];
  fileUploaded: boolean = false;
  constructor(private videoService: VideoService) {
  }
  public dropped(files: Event | any) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileUploaded = true;
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
          this.videoService.uploadVideo(fileEntry).subscribe({
            next: response=> {
              console.log('Upload successful', response);
            },
            error: error => {
              console.error('Upload failed', error);
            }
          });

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }
}
