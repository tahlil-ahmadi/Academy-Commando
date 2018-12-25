import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Course } from '../shared/course.model';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
})
export class CourseComponent implements OnInit {

  private editMode = false;
  private model:Course;  
  public courseForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: RxFormBuilder) { 
  }

  ngOnInit() {
    this.model = new Course();

    this.route.params.subscribe(a=> {
      this.model.id = a['id'];    //send http request and load course
      this.editMode = true;
    });
    this.courseForm = this.fb.formGroup(this.model);
  }

  submit() {
    
  }
}
