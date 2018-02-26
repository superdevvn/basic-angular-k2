using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class CategoryService
    {
        public Category PersistCategory(Category category)
        {
            var categoryRepository = new CategoryRepository();
            if (category.Id > 0) return categoryRepository.Update(category);
            return categoryRepository.Create(category);
        }

        public IEnumerable<Category> GetList()
        {
            var categoryRepository = new CategoryRepository();
            return categoryRepository.GetList();
        }

        public Category GetById(int id)
        {
            var categoryRepository = new CategoryRepository();
            return categoryRepository.GetById(id);
        }
    }
}
