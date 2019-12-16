import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';
import {CoursesListItem} from './courses-list.interface';
import {NavigationEnd, Router} from '@angular/router';
import { split } from 'lodash';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses: CoursesListItem[];
  routeUrl: string;

  constructor(private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.getCourses();
    this.router.events.subscribe((value => {
      if (value instanceof NavigationEnd) {
        this.setValueFromUrl(value.url);
      }
    }));
  }

  setValueFromUrl(url) {
    this.routeUrl = split(url, '/')[2];
  }

  loadMore() {
    this.coursesService.loadMore().subscribe((nextPortionOfCourses: CoursesListItem[]) => {
      this.courses = this.courses.concat(nextPortionOfCourses);
    });
  }

  deleteCourse(id: number) {
    const result = confirm('Do you really want to delete this course?');
    if (result) {
      this.coursesService.removeItem(id).subscribe(() => {
        this.getCourses();
      });
    }
  }

  getCourses(): void {
    this.coursesService.getList().subscribe((courseLists: CoursesListItem[]) => {
       this.courses = courseLists;
    });
  }
}
