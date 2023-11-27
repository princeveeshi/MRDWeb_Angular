using System.Threading.Tasks;

namespace WebApi.Interface
{
  public interface IUnitOfWork
  {
    IContectRepo contectRepo { get; }
  }
}
