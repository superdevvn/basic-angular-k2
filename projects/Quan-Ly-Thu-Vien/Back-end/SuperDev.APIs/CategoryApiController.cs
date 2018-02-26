using System.Web.Http;
using SuperDev.Models;
using SuperDev.Services;

namespace SuperDev.APIs
{
    public partial class SuperDevApiController : ApiController
    {
        [HttpGet]
        [Route("api/getCategory/{id}")]
        public IHttpActionResult GetCategory(int id)
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.GetById(id));
        }

        [HttpPost]
        [Route("api/saveCategory")]
        public IHttpActionResult SaveCategory([FromBody]Category category)
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.PersistCategory(category));
        }        

        [HttpPost]
        [Route("api/getCategories")]
        public IHttpActionResult GetCategories()
        {
            var categoryService = new CategoryService();
            return Ok(categoryService.GetList());
        }
    }
}
