import { Component, OnInit } from '@angular/core';
import {CoursesListItem} from './courses-list.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: CoursesListItem[] = [
    {
      id: 1,
      title: 'course 1',
      creationDate: new Date('10/11/2019'),
      description: '',
      duration: 110,
      topRated: false
    },
    {
      id: 2,
      title: 'course 2',
      creationDate: new Date('11/11/2019'),
      description: 'On this training, we will take a look at custom ' +
        'components in Angular 2, what they are, how to build comp' +
        'onents in Angular 2 application and pass data between ' +
        'them. Also, we will check components lifecy' +
        'cle and find out correct component’s li' +
        'fecycle event for several common tasks you’ll face during development. ',
      duration: 10,
      topRated: true
    },
    {
      id: 3,
      title: 'course 3',
      creationDate: new Date('12/12/2019'),
      description: 'On this training, we will take a look at custom ' +
        'components in Angular 2, what they are, how to build comp' +
        'onents in Angular 2 application and pass data between ' +
        'them. Also, we will check components lifecy' +
        'cle and find out correct component’s li' +
        'fecycle event for several common tasks you’ll face during development. ',
      duration: 61,
      topRated: false
    }];

  constructor() { }

  ngOnInit() {
  }

  loadMore() {
    console.log('load more');
  }

  deleteCourse(id: number) {
    console.log(id);
  }
}
