using System.Collections.Generic;

namespace Academy.Application.Contracts
{
    public interface ICourseCategoryService
    {
        List<CourseCategoryDTO> GetAll();
    }
}