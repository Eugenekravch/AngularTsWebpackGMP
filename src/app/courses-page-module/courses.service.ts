import {Injectable} from '@angular/core';
import {CoursesListItem} from './courses-list.interface';
import { find } from 'lodash';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
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

  searchCourses(searchText) {
    return this.http.get('http://localhost:3004/courses/', {
      params: {
        textFragment: searchText
      }});
  }
}
