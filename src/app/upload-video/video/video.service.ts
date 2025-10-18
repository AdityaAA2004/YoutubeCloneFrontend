import { Injectable } from '@angular/core';
import {ApiService} from '../../api/api.service';
import {FileSystemFileEntry} from 'ngx-file-drop';

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
    return this.apiService.postFormData(formData);
  }
}
