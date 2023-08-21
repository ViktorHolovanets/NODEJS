﻿using AdministrationWebApi.Models.Db;
using AdministrationWebApi.Models.Exceptions;
using AdministrationWebApi.Models.Presenter;
using AdministrationWebApi.Models.RequestModels;
using AdministrationWebApi.Repositories.Database.Interfaces;
using AdministrationWebApi.Repositories.DataBase.Interfaces;
using AdministrationWebApi.Services.ActionsMailer;
using AdministrationWebApi.Services.DataBase;
using AdministrationWebApi.Services.ResponseHelper.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AdministrationWebApi.Repositories.DataBase
{
    public class NewsService : BaseService<News>, INewsService
    {

        private readonly IActionMailer _mailer;
        public NewsService(IEntityRepository<News> repository,
            IActionMailer mailer)
            : base(repository)
        {
            _mailer = mailer;
        }



        public async Task<IEnumerable<News>> GetNewsByAuthor(Guid authorId, PaginationInfo pagination)
        {
            var news = await BuildQuery(n => n.Author != null && n.Author.Id == authorId, pagination).ToListAsync();

            if (news == null || news.Count == 0)
            {
                throw new NotFoundException("Not found News", "News");
            }

            return news;
        }

        public async Task<IEnumerable<News>> GetNewsByBand(Guid bandId, PaginationInfo pagination)
        {
            var news = await BuildQuery(n => n.Author != null && n.Author.Id == bandId, pagination).ToListAsync();

            if (news == null || news.Count == 0)
            {
                throw new NotFoundException("Not found News", "News");
            }

            return news;
        }
    }
}
