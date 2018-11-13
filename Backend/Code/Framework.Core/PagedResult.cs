using System;
using System.Collections.Generic;

namespace Framework.Core
{
    public class PagedResult<T>
    {
        public List<T> Data { get; private set; }
        public long Total { get; private set; }
        public PagedResult(List<T> data,long total)
        {
            this.Data = data;
            this.Total = total;
        }
    }
}
