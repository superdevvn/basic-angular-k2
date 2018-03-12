using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getProduct/{id}")]
        public IHttpActionResult GetProduct(int id)
        {
            var productService = new ProductService();
            return Ok(productService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveProduct")]
        public IHttpActionResult SaveProduct([FromBody]Product product)
        {
            var productService = new ProductService();
            return Ok(productService.PersistProduct(product));
        }

        [HttpPost]
        [Route("api/getProducts")]
        public IHttpActionResult GetProducts()
        {
            var productService = new ProductService();
            return Ok(productService.GetList());
        }
    }
}
