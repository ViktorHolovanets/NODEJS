﻿using AdministrationWebApi.Models.RequestModels;

namespace AdministrationWebApi.Services.DataBase.Interfaces
{
    public interface IBaseService<TEntity>
    {
        Task<TEntity> GetByIdAsync(Guid id);
        Task<IEnumerable<TEntity>> GetAllAsync(PaginationInfo pagination);
        Task<TEntity> AddAsync(TEntity entity);
        Task<TEntity> UpdateAsync(TEntity entity);
        Task<bool> DeleteAsync(Guid id);

        /// <summary>
        /// Build database query
        /// Готує запит до бази даних
        /// </summary>
        /// <returns></returns>
        IQueryable<TEntity> BuildQuery();
    }


}
