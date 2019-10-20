import { Component, OnInit } from '@angular/core';
import {CoursesListItem} from '../courses-list.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: CoursesListItem[] = [{
    id: 1,
    title: 'course 1',
    creationDate: '10-10-2019',
    description: 'first course',
    duration: 10
  }];

  constructor() { }

  ngOnInit() {
  }

}
