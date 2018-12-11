import { Component, OnInit } from "@angular/core";
import { Course } from "../shared/course.model";
import { State } from "@progress/kendo-data-query";
import { CourseService } from "../shared/course.service";
import { GridDataResult, DataStateChangeEvent } from "@progress/kendo-angular-grid";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Component({
    selector: 'course-list',
    templateUrl: './course-list.component.html'
  })
export class CourseListComponent implements OnInit {
    public data:Observable<GridDataResult>;
    public state: State = {
      skip: 0,
      take: 5,
    };
    constructor(private service:CourseService) { }

    ngOnInit(): void {
        this.data = this.service;
        this.service.query(this.state);
    }

    public gridStateChanged(state: DataStateChangeEvent): void {
        debugger;
        this.state = state;
        this.service.query(this.state);
    }
}