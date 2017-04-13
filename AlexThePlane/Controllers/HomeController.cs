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

        private HttpWebRequest GetRequest(string url, string httpMethod = "GET", bool allowAutoRedirect = true)
        {
            Uri uri = new Uri(url);
            HttpWebRequest request = HttpWebRequest.Create(url) as HttpWebRequest;
            request.UserAgent = @"Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko";

            request.Timeout = Convert.ToInt32(new TimeSpan(0, 5, 0).TotalMilliseconds);
            request.Method = httpMethod;
            return request;
        }
    }
}