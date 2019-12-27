import {Injectable} from '@angular/core';
import {CoursesListItem} from './courses-list.interface';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  protected currentLastIndex = 0;
  private baseUrl = 'http://localhost:3004/courses';
  courses: CoursesListItem[];

  constructor(private http: HttpClient, private router: Router) { }

  getList() {
    return this.http.get(this.baseUrl, {
      params: {
        start: '0',
        count: '3'
      }
    });
  }

  createCourse(name, date, description, length, isTopRated) {
    return this.http.post(this.baseUrl, {
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

    return this.http.get(this.baseUrl, {
      params: {
        start: '' + this.currentLastIndex,
        count: '3'
      }
    });
  }

  getItemById(id) {
    return this.http.get(this.baseUrl + '/' + id);
  }

  updateItem(id, name, date, description, length, isTopRated): void {
    this.http.patch(this.baseUrl + '/' + id, {
      id,
      name,
      date,
      length,
      description,
      authors: {
      id: '1',
        name: 'name'
    },
    isTopRated
  }).subscribe((item) => {
      this.router.navigate(['/course-list']);
      console.log(item);
    });
  }

  removeItem(id) {
    return this.http.delete(this.baseUrl + id);
  }

  searchCourses(searchText) {
    return this.http.get(this.baseUrl, {
      params: {
        textFragment: searchText
      }});
  }
}
