using System;
using Academy.Application;
using Academy.Application.Contracts;
using Academy.Application.Contracts.Courses;
using Academy.Domain;
using Academy.Persistence.EF;
using Academy.Persistence.EF.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Academy.Config
{
    public static class Bootstrapper
    {
        public static void AddAcademy(this IServiceCollection collection, AcademyOptions options)
        {
            //TODO: use batch registration here O_o
            collection.AddScoped<ICourseCategoryService, CourseCategoryService>();
            collection.AddScoped<ICourseCategoryRepository, CourseCategoryRepository>();

            collection.AddScoped<ICourseService, CourseService>();
            collection.AddScoped<ICourseRepository, CourseRepository>();

            collection.AddDbContext<AcademyContext>(builder => 
                                        builder.UseSqlServer(options.ConnectionString));
        }
    }
}
