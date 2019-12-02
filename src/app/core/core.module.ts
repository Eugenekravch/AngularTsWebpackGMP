import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';
import { EmptyRouteComponentComponent } from './empty-route-component/empty-route-component.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent, LoginInfoComponent, EmptyRouteComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent, EmptyRouteComponentComponent]
})
export class CoreModule { }
