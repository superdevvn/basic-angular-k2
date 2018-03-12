using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;

namespace SuperDev.Models
{
    public partial class SuperDevDbContext
    {
        public DbSet<Order> Orders { get; set; }
    }

    public class Order
    {

        public int Id { get; set; }

        public int CustomerId { get; set; }

        public int ProductId { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public DateTime Date { get; set; }

        public DateTime? DeliveryDate { get; set; }

        public bool IsPayed { get; set; }

        public string Description { get; set; }

        [ForeignKey("CustomerId")]
        public virtual Customer Customer { get; set; }
        [ForeignKey("ProductId")]
        public virtual Product Product { get; set; }
    }

    public class OrderComplex
    {
        public int Id { get; set; }

        public int CustomerId { get; set; }

        public string CustomerName { get; set; }

        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public decimal Price { get; set; }

        public int Quantity { get; set; }

        public DateTime Date { get; set; }

        public DateTime? DeliveryDate { get; set; }

        public bool IsPayed { get; set; }

        public string Description { get; set; }
    }
}
