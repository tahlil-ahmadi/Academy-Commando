import { Component } from "@angular/core";
import { CourseCategory } from "../shared/course-category.model";
import { DialogRef } from "@progress/kendo-angular-dialog";
import { CourseCategoryService } from "../shared/course-category.service";
import { OK } from "../../shared/dialogresults.constants";

@Component({
    selector: 'course-category',
    templateUrl: './course-category.component.html'
  })
export class CourseCategoryComponent {
    
    public model: CourseCategory;
    constructor(private dialog : DialogRef, private service:CourseCategoryService){
        this.model = new CourseCategory();
    }
   
    save():void {
      debugger;
      this.service.save(this.model).subscribe(a=>{
        this.dialog.close(OK);
      });
    }
}