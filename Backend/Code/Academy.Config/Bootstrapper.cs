using System;
using Academy.Application;
using Academy.Application.Contracts;
using Academy.Domain;
using Academy.Persistence.EF;
using Academy.Persistence.EF.Repositories;
using Microsoft.Extensions.DependencyInjection;

namespace Academy.Config
{
    public static class Bootstrapper
    {
        public static void AddAcademy(this IServiceCollection collection)
        {
            collection.AddScoped<ICourseCategoryService, CourseCategoryService>();
            collection.AddScoped<ICourseCategoryRepository, CourseCategoryRepository>();
            collection.AddScoped<AcademyContext>();
        }
    }
}
