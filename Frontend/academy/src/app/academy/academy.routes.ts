import { CourseCategoryListComponent } from "./course-categories/course-category-list/course-category-list.component";
import { Routes } from "@angular/router";
import { CourseListComponent } from "./courses/course-list/course-list.component";
import { AuthGuard } from "../auth/shared/auth-guard";

export const ACADEMY_ROUTES: Routes = [
    { 
        path: 'course-category-list', 
        component: CourseCategoryListComponent,
        canActivate:[AuthGuard]
    },
    
    {
        path:'course-list',
        component:CourseListComponent,
        canActivate:[AuthGuard]
    }
];