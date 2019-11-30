import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses-new-edit-page',
  templateUrl: './courses-new-edit-page.component.html',
  styleUrls: ['./courses-new-edit-page.component.scss']
})
export class CoursesNewEditPageComponent implements OnInit {
  @Input() title = '';
  @Input() duration: number;
  @Input() description = '';
  @Input() date = '';

  constructor() { }

  ngOnInit() {
  }

  save(): void {
    console.log(this.duration, this.date, this.description, this.title);
  }
  cancel(): void {
    console.log('cancel');
  }
}
