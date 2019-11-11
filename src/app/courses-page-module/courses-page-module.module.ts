import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';
import { CourseStatusDirective } from './courses-list-item/course-status.directive';
import { DurationPipe } from './duration.pipe';

@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchComponent, CourseStatusDirective, DurationPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CoursesListComponent, SearchComponent]
})
export class CoursesPageModuleModule { }
