import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiHostUrl = environment.apiHostUrl;
  constructor(private httpClient: HttpClient) { }

  public postFormData(formData: FormData) {
    const videoUploadUrl = this.apiHostUrl + "/api/videos";
    return this.httpClient.post(videoUploadUrl, formData);
  }
}
