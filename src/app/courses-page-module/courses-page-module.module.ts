import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { CourseStatusDirective } from './courses-list-item/course-status.directive';
import { DurationPipe } from './duration.pipe';
import { CoursesNewEditPageComponent } from './courses-new-edit-page/courses-new-edit-page.component';

@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchComponent, CourseStatusDirective, DurationPipe, CoursesNewEditPageComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CoursesListComponent, SearchComponent]
})
export class CoursesPageModuleModule { }
