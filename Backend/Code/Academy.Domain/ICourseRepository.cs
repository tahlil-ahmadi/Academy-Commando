using System;
using System.Collections.Generic;
using System.Text;
using Framework.Core;
using Framework.Core.Filtering;

namespace Academy.Domain
{
    public interface ICourseRepository
    {
        PagedResult<Course> Get(IFilter filter);
    }
}
