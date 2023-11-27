using WebApi.Interface;
using WebApi.Data;
using WebApi.DTOs;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Repository
{
  public class ContactDataRepo : IContectRepo  // Correct the interface name
  {
    private readonly DataContext dataContext;

    public ContactDataRepo(DataContext dataContext)
    {
      this.dataContext = dataContext;
    }

    public async Task<List<ContactDataDTOs>> GetMessageData()
    {
      try
      {
        // Use Entity Framework Core to query your data from the database.
        var contactData = await dataContext.Contacts
            .Select(data => new ContactDataDTOs
            {
              Id = data.Id,
              Name = data.Name,
              Email = data.Email,
              Message = data.Message,
              Branding = data.Branding,
              DigitalMarketing = data.DigitalMarketing,
              WebDevelopment = data.WebDevelopment
            })
            .ToListAsync();

        return contactData;
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }
  }
}
