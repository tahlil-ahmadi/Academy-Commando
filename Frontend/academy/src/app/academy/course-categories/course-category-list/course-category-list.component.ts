import { Component, OnInit } from "@angular/core";
import { CourseCategory } from "../shared/course-category.model";
import { CourseCategoryService } from "../shared/course-category.service";
import { DialogService } from "@progress/kendo-angular-dialog";
import { CourseCategoryComponent } from "../course-category/course-category.component";
import { OK } from "../../shared/dialogresults.constants";

@Component({
    selector: 'course-category-list',
    templateUrl: './course-category-list.component.html'
  })
export class CourseCategoryListComponent implements OnInit {
    
    public courseCategories: Array<CourseCategory>;

    constructor(private service: CourseCategoryService,
        private dialogService: DialogService){

    } 

    delete (item : CourseCategory):void {
        this.service.delete(item.id).subscribe(a=>{
            this.loadTree();
        });
    }

    edit (item : CourseCategory):void {
        alert(`editing ${item.id}`);
    }

    addRoot():void{
        const dialogRef = this.dialogService.open({
            title: 'Please confirm',
            content: CourseCategoryComponent
        });
        dialogRef.result.subscribe(result=>{
            if (result == OK){
                this.loadTree();
            }
        });
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