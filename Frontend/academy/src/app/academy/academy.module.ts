import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import {ACADEMY_ROUTES} from './academy.routes';

import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';
import { CourseCategoryComponent } from 'src/app/academy/course-categories/course-category/course-category.component';
import { CourseCategoryService } from './course-categories/shared/course-category.service';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { GridModule } from '@progress/kendo-angular-grid';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseService } from './courses/shared/course.service';
import { AuthModule } from '../auth/auth.module';
import { CourseComponent } from './courses/course/course.component';

@NgModule({
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent,

    CourseListComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ACADEMY_ROUTES),
    HttpClientModule,

    TreeViewModule,
    ButtonsModule,
    DialogModule,
    GridModule,

    AuthModule,

    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseCategoryService,
    CourseService
  ],
  entryComponents:[
    CourseCategoryComponent
  ],
  exports:[],
  bootstrap: []
})
export class AcademyModule { }
