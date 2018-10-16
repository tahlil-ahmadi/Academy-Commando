import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import {ACADEMY_ROUTES} from './academy.routes';

import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';

@NgModule({
  declarations: [
    CourseCategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ACADEMY_ROUTES)
  ],
  providers: [],
  exports:[],
  bootstrap: []
})
export class AcademyModule { }
