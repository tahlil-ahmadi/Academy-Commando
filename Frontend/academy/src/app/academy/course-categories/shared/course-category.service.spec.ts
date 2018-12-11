import { CourseCategoryService } from "./course-category.service";

describe('courseCategory Service', ()=>{

    let sut:CourseCategoryService;
    let httpClient;
    beforeEach(()=>{
        httpClient = jasmine.createSpyObj(['delete', 'get','post','put']);
        sut = new CourseCategoryService(httpClient);
    });

    it('should delete on correct url', ()=>{
        //dont hardcode this ! :|
        var expectedUrl = "http://localhost:5050/api/coursecategories/1"

        sut.delete(1);

        expect(httpClient.delete).toHaveBeenCalledWith(expectedUrl);
    });

});