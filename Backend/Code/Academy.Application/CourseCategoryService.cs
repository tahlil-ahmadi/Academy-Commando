using System;
using System.Collections.Generic;
using System.Linq;
using Academy.Application.Contracts;
using Academy.Domain;
using Mapster;

namespace Academy.Application
{
    public class CourseCategoryService : ICourseCategoryService
    {
        private readonly ICourseCategoryRepository _repository;
        public CourseCategoryService(ICourseCategoryRepository repository)
        {
            _repository = repository;
        }
        public List<CourseCategoryDTO> GetAll()
        {
            var entities = _repository.GetAll();
            return entities.Adapt<List<CourseCategoryDTO>>();
        }

        public void Delete(long id)
        {
            var entity = _repository.GetById(id);
            if (entity != null)
                _repository.Remove(entity);
        }

        public void Create(CreateCourseCategoryDTO dto)
        {
            var entity = new CourseCategory(dto.Title);
            _repository.Add(entity);
        }
    }
}
