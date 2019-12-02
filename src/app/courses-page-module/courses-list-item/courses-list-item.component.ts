import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListItem} from '../courses-list.interface';

@Component({
  selector: 'app-courses-list-item',
  templateUrl: './courses-list-item.component.html',
  styleUrls: ['./courses-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesListItemComponent implements OnInit {
  @Input() public courseInfo: CoursesListItem;
  @Output() deleteCourseEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    // if (this.courseInfo.id % 2) {
    //   this.courseInfo.title = 'OnInit value';
    // }
  }

  deleteCourse(id: number) {
    this.deleteCourseEvent.emit(id);
  }
}
