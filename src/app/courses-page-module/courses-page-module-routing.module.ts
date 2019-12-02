import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from '../authentication-module/auth.guard';
import {CoursesListComponent} from './courses-list.component';
import {CoursesNewEditPageComponent} from './courses-new-edit-page/courses-new-edit-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: CoursesListComponent,
    children: [
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
export class CoursesPageModuleRoutingModule {
}
