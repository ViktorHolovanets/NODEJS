﻿using System.ComponentModel.DataAnnotations;

namespace AdministrationWebApi.Models.Db
{
    public class Album
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public DateTime Release { get; set; }
        public string? Info { get; set; }
        public Band? Band { get; set; }
        public List<Song> Songs { get; set; } = new();
    }
}
