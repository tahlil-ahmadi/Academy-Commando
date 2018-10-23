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
        private readonly AcademyContext _context;
        public CourseCategoryRepository(AcademyContext context)
        {
            _context = context;
        }
        public List<CourseCategory> GetAll()
        {
            //TODO: use 'on-demand loading' :|
            return _context.CourseCategories
                .ToList()
                .Where(a=>!a.ParentId.HasValue)
                .ToList();
        }

        public CourseCategory GetById(long id)
        {
            return _context.CourseCategories.FirstOrDefault(a=>a.Id == id);
        }

        public void Remove(CourseCategory courseCategory)
        {
            _context.CourseCategories.Remove(courseCategory);
            _context.SaveChanges();
        }

        public void Add(CourseCategory entity)
        {
            _context.CourseCategories.Add(entity);
            _context.SaveChanges();
        }
    }
}
