import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CourseCategoryListComponent } from './course-categories/course-category-list/course-category-list.component';

@NgModule({
  declarations: [
    CourseCategoryListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports:[
    CourseCategoryListComponent
  ],
  bootstrap: []
})
export class AcademyModule { }
