import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UploadVideoResponse } from '../types/UploadVideoResponse';
import {UploadThumbnailResponse} from '../types/UploadThumbnailResponse';
import {GetVideoResponse} from '../types/GetVideoResponse';
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

  public uploadThumbnail(thumbnailUpload: FormData, videoId: string) {
    const thumbnailUploadUrl = this.apiHostUrl + `/api/videos/thumbnail`;
    return this.httpClient.post<UploadThumbnailResponse>(thumbnailUploadUrl, thumbnailUpload);
  }

  public getVideo(videoId: string) {
    const getVideoUrl = this.apiHostUrl + `/api/videos/${videoId}`;
    return this.httpClient.get<GetVideoResponse>(getVideoUrl);
  }

  public saveVideoDetails(videoMetadata: GetVideoResponse) {
    const saveVideoDetailsUrl = this.apiHostUrl + `/api/videos`;
    return this.httpClient.put<GetVideoResponse>(saveVideoDetailsUrl, videoMetadata);
  }
}
