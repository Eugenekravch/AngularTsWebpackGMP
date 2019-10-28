import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [CoursesListComponent, SearchComponent]
})
export class CoursesPageModuleModule { }
