import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-save-video-details',
  imports: [],
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.css'
})
export class SaveVideoDetailsComponent implements OnInit {
  ngOnInit() {
    // Logic to fetch and display video details goes here
    console.log('URL param:', window.location.pathname.split('/').pop());
  }
}
