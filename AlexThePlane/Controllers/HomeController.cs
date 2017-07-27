using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Text;
using System.Net.Http;
using System.Threading.Tasks;

namespace AlexThePlane.Controllers
{
    public class HomeController : Controller
    {
        // GET: Homemain
        public ActionResult Index()
        {
            return View();
        }

        // GET: Map
        public ActionResult Map()
        {
            return View();
        }
    }
}