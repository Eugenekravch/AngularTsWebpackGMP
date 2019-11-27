import { Injectable } from '@angular/core';
import {CoursesListItem} from './courses-list.interface';
import { find, remove } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

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

  protected id = 3;

  getList() {
    return this.courses;
  }

  createCourse(title, creationDate, description, duration, topRated): void {
    this.id = this.id++;
    this.courses.push({
      id: this.id,
      title,
      creationDate,
      description,
      duration,
      topRated
    });
  }

  getItemById(id): CoursesListItem {
    return find(this.courses, ['id', id]);
  }

  updateItem(id, title, creationDate, description, duration, topRated): void {
    const selectedItem = find(this.courses, ['id', id]);

    selectedItem.title = title;
    selectedItem.creationDate = creationDate;
    selectedItem.description = description;
    selectedItem.duration = duration;
    selectedItem.topRated = topRated;
  }

  removeItem(id): void {
    remove(this.courses, (item) => {
      return item.id === id;
    });
  }
}
