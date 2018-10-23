import { Component, OnInit } from "@angular/core";
import { CourseCategory } from "../shared/course-category.model";
import { CourseCategoryService } from "../shared/course-category.service";

@Component({
    selector: 'course-category-list',
    templateUrl: './course-category-list.component.html'
  })
export class CourseCategoryListComponent implements OnInit {
    
    public courseCategories: Array<CourseCategory>;

    constructor(private service: CourseCategoryService){} 

    delete (item : CourseCategory):void {
        this.service.delete(item.id).subscribe(a=>{
            this.loadTree();
        });
    }

    edit (item : CourseCategory):void {
        alert(`editing ${item.id}`);
    }

    ngOnInit(): void {
        this.loadTree();
    }

    private loadTree() {
        this.service.getAll().subscribe(a => {
            this.courseCategories = a;
        });
    }
}