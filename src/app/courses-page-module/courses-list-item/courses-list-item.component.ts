import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {CoursesListItem} from '../courses-list.interface';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss']
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseInfo: CoursesListItem;

  constructor() { }

  ngOnInit() {
    if (this.courseInfo.id % 2) {
      this.courseInfo.title = 'OnInit value';
    }
  }

  editCourse() {
    return;
  }
}
