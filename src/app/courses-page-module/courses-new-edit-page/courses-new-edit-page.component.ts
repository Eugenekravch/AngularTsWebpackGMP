import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
  protected id: number;
  protected selectedCourse: CoursesListItem;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

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
        this.title = '';
        this.duration = 0;
        this.description = '';
        this.date = undefined;
      }
    });
  }

  save(): void {
    console.log(this.duration, this.date, this.description, this.title);
  }
  cancel(): void {
    console.log('cancel');
  }
}
