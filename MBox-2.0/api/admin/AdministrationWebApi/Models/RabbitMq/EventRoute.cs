namespace AdministrationWebApi.Models.RabbitMq
{
    public class EventRoute
    {
        public EmitObject? Socket { get; set; }
        public MailObject? Mail { get; set; }
    }
}
