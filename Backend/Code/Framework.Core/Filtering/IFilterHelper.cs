using System.Linq;

namespace Framework.Core.Filtering
{
    public interface IFilterHelper
    {
        PagedResult<T> Apply<T>(IQueryable<T> query, IFilter filter);
    }
}