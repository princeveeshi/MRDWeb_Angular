
namespace WebApi.DTOs
{
  public class ContactDataDTOs
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Message { get; set; }

    public bool Branding { get; set; }

    public bool DigitalMarketing { get; set; }
    public bool WebDevelopment { get; set; }
  }
}
