using System;
using System.Collections.Generic;
using System.Text;

namespace Framework.Core.Filtering
{
    public interface IFilter
    {
        int PageSize { get; }
        int Page { get;  }
    }
}
