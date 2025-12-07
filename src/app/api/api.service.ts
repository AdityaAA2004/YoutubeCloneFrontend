import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { UploadVideoResponse } from '../types/UploadVideoResponse';
import {UploadThumbnailResponse} from '../types/UploadThumbnailResponse';
import {GetVideoResponse} from '../types/GetVideoResponse';
import { local_environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Use environment variable provided by Angular builds instead of process.env
  private apiHostUrl = local_environment.apiHostURL || ''
  constructor(private httpClient: HttpClient) { }

  private blockEmptyAPIHost() {
    if (!this.apiHostUrl) {
      throw new Error('API_HOST (environment.apiHost) is not set. Configure src/environments/environment.ts');
    }
  }
  public uploadVideo(videoUpload: FormData) {
    this.blockEmptyAPIHost();
    const videoUploadUrl = this.apiHostUrl + "/api/videos";
    return this.httpClient.post<UploadVideoResponse>(videoUploadUrl, videoUpload);
  }

  public uploadThumbnail(thumbnailUpload: FormData, videoId: string) {
    this.blockEmptyAPIHost();
    const thumbnailUploadUrl = this.apiHostUrl + `/api/videos/thumbnail`;
    return this.httpClient.post<UploadThumbnailResponse>(thumbnailUploadUrl, thumbnailUpload);
  }

  public getVideo(videoId: string) {
    this.blockEmptyAPIHost();
    const getVideoUrl = this.apiHostUrl + `/api/videos/${videoId}`;
    return this.httpClient.get<GetVideoResponse>(getVideoUrl);
  }

  public saveVideoDetails(videoMetadata: GetVideoResponse) {
    this.blockEmptyAPIHost();
    const saveVideoDetailsUrl = this.apiHostUrl + `/api/videos`;
    return this.httpClient.put<GetVideoResponse>(saveVideoDetailsUrl, videoMetadata);
  }
}
