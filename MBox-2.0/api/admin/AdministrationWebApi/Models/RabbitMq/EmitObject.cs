namespace AdministrationWebApi.Models.RabbitMq
{
    public class EmitObject
    {
        public string? From { get; set; }
        public string? To { get; set; }
        public object? Body { get; set; }
        public string Type { get; set; }
    }
}
