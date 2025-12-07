import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localData: {[key: string]: string} = {};

  constructor() { }

  setVideoId(id: string): void {
    this.localData['videoId'] = id;
    this.setDataToLocalStorage();
  }

  getVideoId(): string {
    if (!this.localData['videoId']) {
      const videoIdFromStorage = this.getDataFromLocalStorage('videoId');
      if (videoIdFromStorage) {
        this.localData['videoId'] = videoIdFromStorage;
      }
      else {
        this.localData['videoId'] = '';
      }
    }
    return this.localData['videoId'];
  }

  private setDataToLocalStorage(): void {
    // current data will be stored in session storage
    sessionStorage.setItem('videoId', this.localData['videoId']);
  }

  private getDataFromLocalStorage(key: string): string {
    return sessionStorage.getItem(key) || '';
  }

}
