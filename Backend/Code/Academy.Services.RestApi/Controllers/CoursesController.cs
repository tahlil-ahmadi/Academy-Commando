using Academy.Application.Contracts.Courses;
using AutoFixture;
using Framework.Core;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Framework.Kendo;
using Kendo.Mvc.UI;

namespace Academy.Services.RestApi.Controllers
{
    [Route("api/[controller]")]
    public class CoursesController : Controller
    {
        private ICourseService _service;
        public CoursesController(ICourseService service)
        {
            _service = service;
        }

        [HttpGet]
        public PagedResult<CourseDTO> Get([DataSourceRequest]DataSourceRequest request)
        {
            return _service.Get(new KendoFilter(request));
        }
    }
}
