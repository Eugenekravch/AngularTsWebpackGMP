import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CoursesService} from '../courses.service';
import {CoursesListItem} from '../courses-list.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-courses-new-edit-page',
  templateUrl: './courses-new-edit-page.component.html',
  styleUrls: ['./courses-new-edit-page.component.scss']
})
export class CoursesNewEditPageComponent implements OnInit {
  newEditForm: FormGroup;
  protected id: number|string;
  protected selectedCourse: CoursesListItem;

  constructor(private route: ActivatedRoute, private coursesService: CoursesService, private router: Router) {
    this.newEditForm = new FormGroup({
      courseTitle: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      courseDescription: new FormControl('', [Validators.required, Validators.maxLength(500)]),
      courseDate: new FormControl('', [Validators.required]),
      courseDuration: new FormControl(0, [Validators.required])
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== 'new') {
        this.id = +params.id;
        this.coursesService.getItemById(this.id).subscribe((course: any) => {
          this.selectedCourse = course;
          if (!this.selectedCourse) {
            this.router.navigate(['/not-found']);
          }

          this.newEditForm.controls.courseTitle.setValue(this.selectedCourse.name);
          this.newEditForm.controls.courseDuration.setValue(this.selectedCourse.length);
          this.newEditForm.controls.courseDescription.setValue(this.selectedCourse.description);
          this.newEditForm.controls.courseDate.setValue(this.selectedCourse.date);
        });
      }
    });
  }

  save(): void {
    const controls = this.newEditForm.value;
    if (this.id === 'new') {
      this.coursesService.createCourse(
        controls.courseTitle,
        controls.courseDate,
        controls.courseDescription,
        controls.courseDuration,
        false
      );
    } else {
      this.coursesService.updateItem(
        +this.id,
        controls.courseTitle,
        controls.courseDate,
        controls.courseDescription,
        controls.courseDuration,
        false
      );
    }
  }
  cancel(): void {
    this.router.navigate(['/course-list']);
  }
}
