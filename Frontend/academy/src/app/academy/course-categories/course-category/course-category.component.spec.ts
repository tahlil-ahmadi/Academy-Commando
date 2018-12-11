import { CourseCategoryComponent } from "./course-category.component";
import { of } from "rxjs";
import { CourseCategory } from "../shared/course-category.model";
import { OK } from "../../shared/dialogresults.constants";

describe('courseCategory component', ()=>{

    let service;
    let dialog;
    let sut:CourseCategoryComponent;
    
    beforeEach(()=>{
        service = jasmine.createSpyObj(['save']);
        dialog = jasmine.createSpyObj(['close']);
        sut = new CourseCategoryComponent(dialog, service);
    });

    it('should instantiate model on constructor', ()=>{
        expect(sut.model).toBeDefined();
    });

    describe('save method', ()=>{
        it('should call save on service', () =>{
            service.save.and.returnValue(of(true));
    
            sut.save();
    
            expect(service.save).toHaveBeenCalledTimes(1);
            expect(service.save).toHaveBeenCalledWith(sut.model);
        })
        
        it('should close dialog after saving',()=>{
            service.save.and.returnValue(of(true));
    
            sut.save();
    
            expect(dialog.close).toHaveBeenCalled();
            expect(dialog.close).toHaveBeenCalledWith(OK);
        });
    })
});