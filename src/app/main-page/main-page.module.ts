import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';
import {CoursesPageModuleModule} from '../courses-page-module/courses-page-module.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    FormsModule,
    CoreModule,
    CoursesPageModuleModule
  ]
})
export class MainPageModule { }
