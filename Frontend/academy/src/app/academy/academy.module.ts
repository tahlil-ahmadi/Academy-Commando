import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ACADEMY_ROUTES} from './academy.routes';

import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';
import { CourseCategoryComponent } from 'src/app/academy/course-categories/course-category/course-category.component';
import { CourseCategoryService } from './course-categories/shared/course-category.service';

import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogModule } from '@progress/kendo-angular-dialog';


@NgModule({
  declarations: [
    CourseCategoryListComponent,
    CourseCategoryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ACADEMY_ROUTES),
    HttpClientModule,
    FormsModule,

    TreeViewModule,
    ButtonsModule,
    DialogModule
  ],
  providers: [
    CourseCategoryService
  ],
  entryComponents:[
    CourseCategoryComponent,
  ],
  exports:[],
  bootstrap: []
})
export class AcademyModule { }
