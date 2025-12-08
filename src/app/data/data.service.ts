import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private localData: {[key: string]: string} = {};

  constructor() { }

  setVideoIdForSaveVideo(id: string): void {
    this.localData['videoIdForSaveVideo'] = id;
    this.setDataToLocalStorage('videoIdForSaveVideo');
  }
  getVideoIdForSaveVideo(): string {
    if (!this.localData['videoIdForSaveVideo']) {
      const videoIdFromStorage = this.getDataFromLocalStorage('videoIdForSaveVideo');
      if (videoIdFromStorage) {
        this.localData['videoIdForSaveVideo'] = videoIdFromStorage;
      }
      else {
        this.localData['videoIdForSaveVideo'] = '';
      }
    }
    return this.localData['videoIdForSaveVideo'];
  }

  setVideoIdForViewVideo(id: string): void {
    this.localData['videoIdForViewVideo'] = id;
    this.setDataToLocalStorage('videoIdForViewVideo');
  }
  getVideoIdForViewVideo(): string {
    if (!this.localData['videoIdForViewVideo']) {
      const videoIdFromStorage = this.getDataFromLocalStorage('videoIdForViewVideo');
      if (videoIdFromStorage) {
        this.localData['videoIdForViewVideo'] = videoIdFromStorage;
      }
      else {
        this.localData['videoIdForViewVideo'] = '';
      }
    }
    return this.localData['videoIdForViewVideo'];
  }

  private setDataToLocalStorage(key: string): void {
    // current data will be stored in session storage
    sessionStorage.setItem(key, this.localData[key]);
  }
  private getDataFromLocalStorage(key: string): string {
    return sessionStorage.getItem(key) || '';
  }

}
