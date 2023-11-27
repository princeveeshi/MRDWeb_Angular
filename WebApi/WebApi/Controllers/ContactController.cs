using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Data;
using Microsoft.AspNetCore.Cors;
using WebApi.DTOs;
using WebApi.Repository;
using WebApi.Interface;

namespace WebApi.Controllers
{
  [EnableCors("AllowSpecificOrigin")]
  [Route("api/contact")]
  [ApiController]
  public class ContactController : ControllerBase
  {
    private readonly DataContext dataContext;
    private readonly IContectRepo contactRepo;  // Correct the interface name

    public ContactController(DataContext context, IContectRepo contactRepo)  // Correct the interface name
    {
      dataContext = context;
      this.contactRepo = contactRepo;
    }

    [HttpGet("GetAllContacts")]
    public async Task<IActionResult> GetAllContacts()
    {
      try
      {
        var contacts = await contactRepo.GetMessageData();
        return Ok(contacts);
      }
      catch (Exception ex)
      {
        return StatusCode(500, "An error occurred: " + ex.Message);
      }
    }

  }
}
