using System;
using Framework.Core.Filtering;
using Kendo.Mvc.UI;

namespace Framework.Kendo
{
    public class KendoFilter : IFilter
    {
        public DataSourceRequest Request { get; }
        public KendoFilter(DataSourceRequest request)
        {
            this.Request = request;
        }
        public int PageSize => Request.PageSize;
        public int Page => Request.Page;
    }
}
