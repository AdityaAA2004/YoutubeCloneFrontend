import { Injectable } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {FileSystemFileEntry} from 'ngx-file-drop';
import {GetVideoResponse} from '../../types/GetVideoResponse';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private apiService: ApiService) { }

  public uploadVideo(fileEntry: FileSystemFileEntry) {
    const formData = new FormData();
    fileEntry.file((file: File) => {
      formData.append('file', file, fileEntry.name);
    });
    return this.apiService.uploadVideo(formData);
  }

  public uploadThumbnail(thumbnailFile: File, videoId: string) {
    const formData = new FormData();
    formData.append('file', thumbnailFile, thumbnailFile.name);
    formData.append('videoId', videoId);
    return this.apiService.uploadThumbnail(formData, videoId);
  }

  public getVideo(videoId: string) {
    return this.apiService.getVideo(videoId);
  }

  public saveVideoDetails(videoMetadata: GetVideoResponse) {
    return this.apiService.saveVideoDetails(videoMetadata);
  }
}
