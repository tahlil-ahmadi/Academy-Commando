using System;
using System.Collections.Generic;
using System.Text;
using Academy.Domain;
using Academy.Persistence.EF.Mappings;
using Microsoft.EntityFrameworkCore;

namespace Academy.Persistence.EF
{
    public class AcademyContext : DbContext
    {
        public DbSet<CourseCategory> CourseCategories { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //TODO: remove the hardcoded connection string
            optionsBuilder.UseSqlServer(@"data source=CLASS1-TEACHER\MSSQLSERVER1;initial catalog=Academy2DB;integrated security=true");
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CourseCategoryMapping());
            base.OnModelCreating(modelBuilder);
        }
    }
}
