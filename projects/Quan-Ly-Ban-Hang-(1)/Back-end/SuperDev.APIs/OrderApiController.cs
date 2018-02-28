using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpPost]
        [Route("api/getOrders")]
        public IHttpActionResult GetOrders()
        {
            var orderService = new OrderService();
            return Ok(orderService.GetList());
        }

        [HttpGet]
        [Route("api/getOrder/{id}")]
        public IHttpActionResult GetOrder(int id)
        {
            var orderService = new OrderService();
            return Ok(orderService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveOrder")]
        public IHttpActionResult SaveOrder([FromBody]Order order)
        {
            var orderService = new OrderService();
            return Ok(orderService.PersistOrder(order));
        }
    }
}
