using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Academy.Config;
using Framework.Core.Filtering;
using Framework.Kendo;
using IdentityServer4.AccessTokenValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Academy.Services.RestApi
{
    public class Startup
    {
        private AcademyOptions options;
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            options = configuration.Get<AcademyOptions>();
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
           services.AddAuthentication(IdentityServerAuthenticationDefaults.AuthenticationScheme)
                .AddIdentityServerAuthentication(options =>
                {
                    options.Authority = "http://localhost:5000";
                    options.RequireHttpsMetadata = false;
                    options.ApiName = "academy-api";
                });
            services.AddKendo();
            services.AddCors();
            services.AddAcademy(this.options);
            services.AddMvc();
            services.AddSingleton<IFilterHelper, KendoFilterAdapter>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseAuthentication();
            app.UseCors(builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
            app.UseHttpsRedirection();
            app.UseMvc();           //Add mvc MiddleWare
        }
    }
}
