using System.Collections.Generic;

namespace Academy.Application.Contracts
{
    public class CourseCategoryDTO
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public List<CourseCategoryDTO> Children { get; set; }
    }
}
