import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { EmptyRouteComponentComponent } from './empty-route-component/empty-route-component.component';
import {RouterModule} from '@angular/router';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    LoginInfoComponent,
    EmptyRouteComponentComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, EmptyRouteComponentComponent, LoadingComponent]
})
export class CoreModule { }
