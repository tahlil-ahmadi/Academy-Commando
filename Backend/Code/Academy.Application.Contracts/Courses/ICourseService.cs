using System;
using System.Collections.Generic;
using System.Text;
using Framework.Core;
using Framework.Core.Filtering;

namespace Academy.Application.Contracts.Courses
{
    public interface ICourseService
    {
        PagedResult<CourseDTO> Get(IFilter filter);
    }
}
