import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from './courses-list.component';
import { CoursesListItemComponent } from './courses-list-item/courses-list-item.component';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CoursesListComponent, CoursesListItemComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CoursesListComponent, SearchComponent]
})
export class CoursesPageModuleModule { }
