import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoursesListComponent} from './courses-page-module/courses-list.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/course-list'},
  {path: 'course-list', component: CoursesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
