using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Framework.Core;
using Framework.Core.Filtering;
using Kendo.Mvc.Extensions;

namespace Framework.Kendo
{
    public class KendoFilterAdapter :IFilterHelper
    {
        public PagedResult<T> Apply<T>(IQueryable<T> query, IFilter filter)
        {
            Debug.Assert(filter is KendoFilter);

            var kendoFilter = (KendoFilter) filter;
            var result = query.ToDataSourceResult(kendoFilter.Request);
            return new PagedResult<T>(result.Data as List<T>, result.Total);
        }
    }
}