import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import {CoursesListItem} from './courses-list.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: CoursesListItem[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.getCourses();
  }

  loadMore() {
    console.log('load more');
  }

  deleteCourse(id: number) {
    this.coursesService.removeItem(id);
  }

  getCourses(): void {
    this.courses = this.coursesService.getList();
  }
}
