using System.Collections.Generic;

namespace Academy.Domain
{
    public class CourseCategory
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public CourseCategory Parent { get; set; }
        public long? ParentId { get; set; }
        public List<CourseCategory> Children { get; set; }

        public CourseCategory(string title) : this(title,null)
        {
        }
        public CourseCategory(string title, CourseCategory parent)
        {
            Title = title;
            Parent = parent;
        }
    }
}