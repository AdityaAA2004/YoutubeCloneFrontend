import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UploadVideoResponse } from '../types/UploadVideoResponse';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiHostUrl = environment.apiHostUrl;
  constructor(private httpClient: HttpClient) { }

  public uploadVideo(videoUpload: FormData) {
    const videoUploadUrl = this.apiHostUrl + "/api/videos";
    return this.httpClient.post<UploadVideoResponse>(videoUploadUrl, videoUpload);
  }
}
