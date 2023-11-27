using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models; // Only this namespace is needed
using System;
using System.IO;
using System.Reflection;
using WebApi.Data;

namespace WebApi
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
      services.AddControllers();

      // Register your database context here
      services.AddDbContext<DataContext>(options =>
      {
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
      });

      services.AddCors(options =>
      {
        options.AddPolicy("AllowAll",
            builder =>
            {
              builder
              .AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
            });
      });


      // Add Swagger generation
      services.AddSwaggerGen(c =>
      {
        c.SwaggerDoc("v1", new OpenApiInfo
        {
          Title = "WebApi",
          Version = "v1",
          Description = "Web API for Managing and Creating API Services"
        });

        var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
        var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
        c.IncludeXmlComments(xmlPath);
      });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      
      app.UseHttpsRedirection();
      app.UseRouting();

      app.UseCors("AllowAll");
      app.UseAuthorization();
      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });

      // Enable Swagger
      app.UseSwagger();

      // Enable Swagger UI at the root URL
      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "API V1");
      });
    }
  }
}
