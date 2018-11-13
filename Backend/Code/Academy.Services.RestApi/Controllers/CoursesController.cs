using Academy.Application.Contracts.Courses;
using AutoFixture;
using Framework.Core;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Academy.Services.RestApi.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private static List<CourseDTO> courses;
        static CoursesController()
        {
            var fixture = new Fixture();
            courses = fixture.CreateMany<CourseDTO>(25).ToList();
        }                            

        [HttpGet]
        public PagedResult<CourseDTO> Get(int skip, int pageSize)
        {
            var data = courses.Skip(skip).Take(pageSize).ToList();
            return new PagedResult<CourseDTO>(data, courses.Count);
        }
    }
}
