import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {CoursesListItem} from '../courses-list.interface';

@Component({
  selector: 'app-courses-new-edit-page',
  templateUrl: './courses-new-edit-page.component.html',
  styleUrls: ['./courses-new-edit-page.component.scss']
})
export class CoursesNewEditPageComponent implements OnInit {
  title = '';
  duration: number;
  description = '';
  date: Date;
  protected id: number|string;
  protected selectedCourse: CoursesListItem;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== 'new') {
        this.id = +params.id;
        this.selectedCourse = this.coursesService.getItemById(this.id);
        this.title = this.selectedCourse.title;
        this.duration = this.selectedCourse.duration;
        this.description = this.selectedCourse.description;
        this.date = this.selectedCourse.creationDate;
      } else {
        this.id = 'new';
        this.title = '';
        this.duration = 0;
        this.description = '';
        this.date = undefined;
      }
    });
  }

  save(): void {
    if (this.id === 'new') {
      this.coursesService.createCourse(this.title, this.date, this.description, this.duration, false);
    } else {
      this.coursesService.updateItem(+this.id, this.title, this.date, this.description, this.duration, false);
    }

    this.router.navigate(['/course-list']);
  }
  cancel(): void {
    this.router.navigate(['/course-list']);
  }
}
