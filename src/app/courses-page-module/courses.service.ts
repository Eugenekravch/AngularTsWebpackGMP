import {Injectable} from '@angular/core';
import {CoursesListItem} from './courses-list.interface';
import { find, remove } from 'lodash';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // courses: CoursesListItem[] = [
  //   {
  //     id: 1,
  //     title: 'course 1',
  //     creationDate: new Date('10/11/2019'),
  //     description: '',
  //     duration: 110,
  //     topRated: false
  //   },
  //   {
  //     id: 2,
  //     title: 'course 2',
  //     creationDate: new Date('11/11/2019'),
  //     description: 'On this training, we will take a look at custom ' +
  //       'components in Angular 2, what they are, how to build comp' +
  //       'onents in Angular 2 application and pass data between ' +
  //       'them. Also, we will check components lifecy' +
  //       'cle and find out correct component’s li' +
  //       'fecycle event for several common tasks you’ll face during development. ',
  //     duration: 10,
  //     topRated: true
  //   },
  //   {
  //     id: 3,
  //     title: 'course 3',
  //     creationDate: new Date('12/12/2019'),
  //     description: 'On this training, we will take a look at custom ' +
  //       'components in Angular 2, what they are, how to build comp' +
  //       'onents in Angular 2 application and pass data between ' +
  //       'them. Also, we will check components lifecy' +
  //       'cle and find out correct component’s li' +
  //       'fecycle event for several common tasks you’ll face during development. ',
  //     duration: 61,
  //     topRated: false
  //   }];

  courses: CoursesListItem[];

  constructor(private http: HttpClient) { }

  protected currentLastIndex = 0;

  getList() {
    return this.http.get('http://localhost:3004/courses', {
      params: {
        start: '0',
        count: '3'
      }
    });
  }

  createCourse(name, date, description, length, isTopRated) {
    return this.http.post('http://localhost:3004/courses', {
      id: 1,
      name,
      date,
      length,
      authors: {
        id: 1,
        name: 'Name'
      },
      isTopRated
    }).subscribe((item) => {
      console.log(item);
    });
  }

  loadMore() {
    this.currentLastIndex += 3;

    return this.http.get('http://localhost:3004/courses', {
      params: {
        start: '' + this.currentLastIndex,
        count: '3'
      }
    });
  }

  getItemById(id) {
    return this.http.get('http://localhost:3004/courses/' + id);
  }

  updateItem(id, name, date, description, length, isTopRated): void {
    const selectedItem = find(this.courses, ['id', id]);

    selectedItem.name = name;
    selectedItem.date = date;
    selectedItem.description = description;
    selectedItem.length = length;
    selectedItem.isTopRated = isTopRated;
  }

  removeItem(id) {
    return this.http.delete('http://localhost:3004/courses/' + id);
  }
}
