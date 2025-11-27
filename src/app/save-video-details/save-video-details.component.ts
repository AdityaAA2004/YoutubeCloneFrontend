import {Component, inject, OnInit, signal} from '@angular/core';
import {DataService} from '../data/data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-save-video-details',
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.css',
  standalone: false
})
export class SaveVideoDetailsComponent implements OnInit {
  private videoId: string = '';
  readonly videoTags = signal(['skyline', 'city', 'boston', 'diwali']);
  announcer = inject(LiveAnnouncer);
  videoMetadataFormGroup: FormGroup;
  constructor(private dataService: DataService) {
    this.videoMetadataFormGroup = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      videoStatus: new FormControl('PUBLIC', Validators.required),
      videoTags: new FormControl(this.videoTags())
    });
  }
  ngOnInit() {
    this.videoId = this.dataService.getVideoId();
  }


  removeTag(newTag: string) {
    this.videoTags.update(tags => {
      const index = tags.indexOf(newTag);
      if (index < 0) {
        return tags;
      }

      tags.splice(index, 1);
      this.announcer.announce(`removed ${newTag} from template form`);
      return [...tags];
    });
  }

  addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.videoTags.update(tags => [...tags, value]);
      this.announcer.announce(`added ${value} to template form`);
    }
    event.chipInput!.clear();
  }


}
