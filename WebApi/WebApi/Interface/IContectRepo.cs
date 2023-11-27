using WebApi.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Interface
{
  public interface IContectRepo
  {
    Task<List<ContactDataDTOs>> GetMessageData();
  }
}
