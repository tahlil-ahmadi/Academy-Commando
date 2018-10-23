import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import {ACADEMY_ROUTES} from './academy.routes';

import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';
import { CourseCategoryService } from './course-categories/shared/course-category.service';

import { TreeViewModule } from '@progress/kendo-angular-treeview';


@NgModule({
  declarations: [
    CourseCategoryListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ACADEMY_ROUTES),
    HttpClientModule,

    TreeViewModule
  ],
  providers: [
    CourseCategoryService
  ],
  exports:[],
  bootstrap: []
})
export class AcademyModule { }
