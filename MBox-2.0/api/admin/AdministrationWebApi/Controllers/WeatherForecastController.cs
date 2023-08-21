using AdministrationWebApi.Models.Db;
using Microsoft.AspNetCore.Mvc;
using AdministrationWebApi.Models.RabbitMq;
using AdministrationWebApi.Services.RabbitMQ;
using AdministrationWebApi.Services.SignalR;
using Microsoft.AspNetCore.SignalR;
using System.Net.Sockets;

namespace AdministrationWebApi.Controllers
{
    [ApiController]
    [Route("/api/admin/[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, RabbitMqService rabbit, IConfiguration configuration, IHubContext<NotificationSignalR> hubContext, AppDb db)
        {
            _logger = logger;
            _configuration = configuration;
            _rabbit = rabbit;
            _hubContext = hubContext;
            _db = db;
        }

        private readonly AppDb _db;
        private readonly IConfiguration _configuration;
        private readonly RabbitMqService _rabbit;
        private readonly IHubContext<NotificationSignalR> _hubContext;

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var id = Guid.NewGuid();
            var msg = new MailObject()
            {
                Id = id,
                Email = "victorgolova@gmail.com",
                Template = "user_delete",
                Name = "my name",
                Type = "type",
                Body = new { Name = "My name" }
            };
            var socket = new EmitObject()
            {               
                To = ": string | null",
                Body = new { Name=": any" },
                Type = "message"
            };
            var eventObj = new EventRoute()
            {
                Mail = msg,
                Socket = socket
            };
            
            _rabbit.SendMessage(eventObj, "queue_event");
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("{id}/signal")]
        public async Task<IActionResult> GetSignalRAsync(string id)
        {
            await _hubContext.Clients.Group(id).SendAsync("ReceiveMessage", "message");
            return Ok();
        }
    }
}