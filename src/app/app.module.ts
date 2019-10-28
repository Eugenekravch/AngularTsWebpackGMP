import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseModule} from './base/base.module';
import {CoursesPageModuleModule} from './courses-page-module/courses-page-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BaseModule,
    CoursesPageModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
