const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function (req, res) {
    // res.write("hi");
    // res.end();
    const q = url.parse(req.url, true);
    if (q.path === "/") {
      fs.readFile("index.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.path === "/about") {
      fs.readFile("about.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else if (q.path === "/contact-me") {
      fs.readFile("contact-me.html", function (err, data) {
        if (err) throw err;
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    } else {
      fs.readFile("404.html", function (err, data) {
        if (err) throw err;
        res.writeHead(404, { "Content-type": "text/html" });
        res.write(data);
        res.end();
      });
    }

    console.log(q.path);
  })
  .listen(8080);
