import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../authentication-module/auth.guard';
import {MainPageComponent} from './main-page.component';
import {CoursesListComponent} from '../courses-page-module/courses-list.component';
import {CoursesNewEditPageComponent} from '../courses-page-module/courses-new-edit-page/courses-new-edit-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: MainPageComponent,
    children: [
      {
        path: '', component: CoursesListComponent
      },
      {
        path: ':id', component: CoursesNewEditPageComponent
      },
      {
        path: 'new', component: CoursesNewEditPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
