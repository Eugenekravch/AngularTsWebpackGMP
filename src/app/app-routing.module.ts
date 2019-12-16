import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {EmptyRouteComponentComponent} from './core/empty-route-component/empty-route-component.component';
import {AuthGuard} from './authentication-module/auth.guard';
import {AuthComponent} from './authentication-module/auth.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/course-list'},
  {
    path: 'course-list',
    loadChildren: () =>
      import('./main-page/main-page.module').then(mod => mod.MainPageModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {path: 'login', component: AuthComponent},
  {path: '**', component: EmptyRouteComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
