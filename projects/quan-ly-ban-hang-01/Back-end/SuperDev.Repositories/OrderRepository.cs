using SuperDev.Models;
using System.Collections.Generic;
using System.Linq;

namespace SuperDev.Repositories
{
    public class OrderRepository
    {
        public Order Create(Order order)
        {
            using (var context = new SuperDevDbContext())
            {
                context.Orders.Add(order);
                context.SaveChanges();
                context.Entry(order).Reload();
                return order;
            }
        }

        public Order Update(Order order)
        {
            using (var context = new SuperDevDbContext())
            {
                var entity = context.Orders.Find(order.Id);
                context.CloneObject(entity, order);
                context.SaveChanges();
                context.Entry(entity).Reload();
                return entity;
            }
        }

        public IEnumerable<OrderComplex> GetEntities()
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Orders.Select(entity => new OrderComplex
                {
                    Id = entity.Id,
                    CustomerId = entity.CustomerId,
                    CustomerName = entity.Customer.Name,
                    ProductId = entity.ProductId,
                    ProductName = entity.Product.Name,
                    Date = entity.Date,
                    DeliveryDate = entity.DeliveryDate,
                    Quantity = entity.Quantity,
                    Price = entity.Price,
                    IsPayed = entity.IsPayed,
                    Description = entity.Description
                }).ToList();
            }
        }

        public Order GetEntity(int id)
        {
            using (var context = new SuperDevDbContext())
            {
                return context.Orders.Find(id);
            }
        }
    }
}
