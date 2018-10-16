import { Component } from "@angular/core";
import { CourseCategory } from "../shared/course-category.model";

@Component({
    selector: 'course-category-list',
    templateUrl: './course-category-list.component.html'
  })
export class CourseCategoryListComponent{
    public courseCategories: Array<CourseCategory>;

    constructor(){
      this.courseCategories = new Array<CourseCategory>();
      this.courseCategories.push(new CourseCategory(1,"Web Programming"));
      this.courseCategories.push(new CourseCategory(2,"Mobile Programming"));
      this.courseCategories.push(new CourseCategory(3,"Desktop Programming"));
    } 

}