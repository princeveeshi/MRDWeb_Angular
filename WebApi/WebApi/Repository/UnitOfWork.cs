using WebApi.Data;
using WebApi.Interface;
using System.Threading.Tasks;

namespace WebApi.Repository
{
  public class UnitOfWork : IUnitOfWork
  {
    private readonly DataContext dataContext;
    private IContectRepo contactRepo;

    public UnitOfWork(DataContext dataContext)
    {
      this.dataContext = dataContext;
    }

    public IContectRepo contectRepo
    {
      get
      {
        if (contactRepo == null)
        {
          contactRepo = new ContactDataRepo(this.dataContext);
        }
        return contactRepo;
      }
    }
  }
}
