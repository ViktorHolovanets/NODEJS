﻿using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace AdministrationWebApi.Models.Db
{
    public class Song
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string? Name { get; set; }
        public List<Band> Performer { get; } = new();
        public string? Poster { get; set; }
        [Required]
        public string? Link { get; set; }
        public string? Text { get; set; }
        public string? Info { get; set; }
        public string? Genre { get; set; }
        public bool IsBlock { get; set; } = false;
        [JsonIgnore]
        public List<Album> Albums { get; set; } = new();
        [JsonIgnore]
        public List<Playlist> Playlists { get; } = new();
    }
}
