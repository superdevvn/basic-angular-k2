using System.Collections.Generic;
using SuperDev.Models;
using SuperDev.Repositories;

namespace SuperDev.Services
{
    public class OrderService
    {
        public Order PersistOrder(Order order)
        {
            var orderRepository = new OrderRepository();
            if (order.Id > 0) return orderRepository.Update(order);
            return orderRepository.Create(order);
        }

        public IEnumerable<OrderComplex> GetList()
        {
            var orderRepository = new OrderRepository();
            return orderRepository.GetEntities();
        }

        public Order GetById(int id)
        {
            var orderRepository = new OrderRepository();
            return orderRepository.GetEntity(id);
        }
    }
}
