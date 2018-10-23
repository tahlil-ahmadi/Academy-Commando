import { CourseCategory } from "./course-category.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CourseCategoryService {

    constructor(private http: HttpClient) {
        
    }

    public getAll(): Observable<Array<CourseCategory>> {
        var url = "http://localhost:5050/api/coursecategories";
        return this.http.get<Array<CourseCategory>>(url);
    }

    public delete(id:number) : Observable<any> {
        var url = "http://localhost:5050/api/coursecategories/" + id;
        return this.http.delete(url);
    }
}