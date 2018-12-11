import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { Course } from "./course.model";
import { GridDataResult } from "@progress/kendo-angular-grid";
import { State, toDataSourceRequestString } from "@progress/kendo-data-query";

@Injectable()
export class CourseService extends BehaviorSubject<GridDataResult> {

    private url = "http://localhost:5050/api/courses";
    constructor(private http: HttpClient) {
        super(null)
    }

    public query(state: State) {
        var filter = toDataSourceRequestString(state);
        var curl = `${this.url}?${filter}`;
        this.http.get<GridDataResult>(curl).subscribe(a=> this.next(a));
    }
}