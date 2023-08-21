namespace AdministrationWebApi.Models.RabbitMq
{
    public class MailObject
    {
        public Guid Id { get; set; }=Guid.NewGuid();
        public string? Template { get; set; }
        public string? Email { get; set; }
        public string? Name { get; set; }
        public string? Type { get; set; }
        public object Body { get; set; }
    }
}
