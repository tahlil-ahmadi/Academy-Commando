namespace Academy.Domain
{
    public class Course
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public CourseCategory Category { get; set; }
        public long CategoryId { get; set; }
    }
}