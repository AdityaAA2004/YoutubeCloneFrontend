import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private videoId: string = '';

  constructor() { }

  setVideoId(id: string): void {
    this.videoId = id;
    this.setDataToLocalStorage();
  }

  getVideoId(): string {
    return this.videoId;
  }

  private setDataToLocalStorage(): void {
    // current data will be stored in session storage
    sessionStorage.setItem('videoId', this.videoId);
  }

}
