using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Academy.Domain;
using Microsoft.EntityFrameworkCore;

namespace Academy.Persistence.EF.Repositories
{
    public class CourseCategoryRepository : ICourseCategoryRepository
    {
        public List<CourseCategory> GetAll()
        {
            using (var context = new AcademyContext())
            {
                //TODO: use 'on-demand loading' :|
                return context.CourseCategories
                    .ToList()
                    .Where(a=>!a.ParentId.HasValue)
                    .ToList();
            }
        }
    }
}
