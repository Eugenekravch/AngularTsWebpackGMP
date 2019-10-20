import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './header/logo/logo.component';
import { LoginInfoComponent } from './header/login-info/login-info.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumbsComponent, LogoComponent, LoginInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, BreadcrumbsComponent]
})
export class BaseModule { }
