using System;
using System.Collections.Generic;
using System.Text;

namespace Academy.Domain
{
    public interface ICourseCategoryRepository
    {
        List<CourseCategory> GetAll();
        CourseCategory GetById(long id);
        void Remove(CourseCategory courseCategory);
    }
}
