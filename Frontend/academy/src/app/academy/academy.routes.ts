import { CourseCategoryListComponent } from "./course-categories/course-category-list/course-category-list.component";
import { Routes } from "@angular/router";
import { CourseListComponent } from "./courses/course-list/course-list.component";

export const ACADEMY_ROUTES: Routes = [
    { path: 'course-category-list', component: CourseCategoryListComponent },
    
    {path:'course-list', component:CourseListComponent}
];