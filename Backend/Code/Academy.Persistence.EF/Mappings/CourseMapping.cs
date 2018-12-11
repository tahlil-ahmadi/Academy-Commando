using System;
using System.Collections.Generic;
using System.Text;
using Academy.Domain;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Academy.Persistence.EF.Mappings
{
    public class CourseMapping : IEntityTypeConfiguration<Course>
    {
        public void Configure(EntityTypeBuilder<Course> builder)
        {
            builder.ToTable("Courses");
            builder.HasKey(a => a.Id);
            builder.Property(a => a.Title).IsRequired().HasMaxLength(255);
            builder.HasOne(a => a.Category)
                .WithMany()
                .IsRequired()
                .HasForeignKey(a => a.CategoryId);
        }
    }
}
