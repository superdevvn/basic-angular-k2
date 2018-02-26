using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class BookService
    {
        public Book PersistBook(Book book)
        {
            var bookRepository = new BookRepository();
            if (book.Id > 0) return bookRepository.Update(book);
            return bookRepository.Create(book);
        }

        public IEnumerable<Book> GetList()
        {
            var bookRepository = new BookRepository();
            return bookRepository.GetList();
        }

        public Book GetById(int id)
        {
            var bookRepository = new BookRepository();
            return bookRepository.GetById(id);
        }
    }
}
