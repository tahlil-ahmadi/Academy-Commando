using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Academy.Domain;
using Framework.Core;
using Framework.Core.Filtering;

namespace Academy.Persistence.EF.Repositories
{
    public class CourseRepository : ICourseRepository
    {
        private readonly AcademyContext _context;
        private readonly IFilterHelper _filterHelper;
        public CourseRepository(AcademyContext context, IFilterHelper filterHelper)
        {
            _context = context;
            _filterHelper = filterHelper;
        }
        public PagedResult<Course> Get(IFilter filter)
        {
            var query = _context.Courses.OrderByDescending(a => a.Id);
            return _filterHelper.Apply(query, filter);
        }
    }
}
