import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {CoursesPageModuleModule} from './courses-page-module/courses-page-module.module';
import {AuthenticationModuleModule} from './authentication-module/authentication-module.module';
import {MainPageModule} from './main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CoursesPageModuleModule,
    AuthenticationModuleModule,
    MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
