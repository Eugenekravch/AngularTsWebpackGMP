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
    const result = confirm('Do you really want to delete this course?');
    if (result) {
      this.coursesService.removeItem(id);
    }
  }
  // editCourse(id: number) {
  //
  // }

  getCourses(): void {
    this.courses = this.coursesService.getList();
  }
}
