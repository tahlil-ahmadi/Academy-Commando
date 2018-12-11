import { CourseCategory } from "./course-category.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CourseCategoryService {
    //dont hardcode this ! :|
    private url = "http://localhost:5050/api/coursecategories/";
    constructor(private http: HttpClient) {

    }

    public getAll(): Observable<Array<CourseCategory>> {
        return this.http.get<Array<CourseCategory>>(this.url);
    }

    public delete(id: number): Observable<any> {
        var curl = this.url + id;
        return this.http.delete(curl);
    }

    public save(model: CourseCategory): Observable<any> {
        return this.http.post(this.url,model);
    }
}