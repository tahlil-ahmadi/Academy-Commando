using System;
using System.Collections.Generic;
using System.Text;
using Academy.Application.Contracts.Courses;
using Academy.Domain;
using Framework.Core;
using Framework.Core.Filtering;
using Mapster;

namespace Academy.Application
{
    public class CourseService : ICourseService
    {
        private readonly ICourseRepository _repository;
        public CourseService(ICourseRepository repository)
        {
            _repository = repository;
        }

        public PagedResult<CourseDTO> Get(IFilter filter)
        {
            var result = _repository.Get(filter);
            var mappedData = result.Data.Adapt<List<CourseDTO>>();
            return new PagedResult<CourseDTO>(mappedData, result.Total);
        }
    }
}
