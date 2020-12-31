//jshint esversion:6
const path = require("path");
const express = require("express");
const request = require("request");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const id = req.body.country;
  const api = "5f54eed41d8a41c094b9e19a58b356ca";
  const url = "https://newsapi.org/v2/top-headlines?country=" + id + "&apiKey=" + api + " ";

  request(url, { json: true }, function (err, response, body) {
    res.setHeader("Content-Type", "text/html");

    if (body.totalResults > 0) {
      if (!err && response.statusCode) {
        for (let i = 0; i < 10; i++) {
          let image = body.articles["" + i].urlToImage;

          res.write("<h2><b>" + (i + 1) + ".  " + body.articles["" + i].title + "</b></h2><br>");
          res.write(body.articles["" + i].description + "<br>");
          res.write(body.articles["" + i].content + "<br>");
          res.write("<img src =" + image + " width= 200 ><br><br>");
          res.write("<p>Time: " + body.articles["" + i].publishedAt + "</p>");
          res.write('<a href="' + body.articles["" + i].url + '">Details</a>');
        }
      }
      res.send();
    }
    else {
      res.send("Unable to find news from " + id + " country.");
    }
  });
});

app.listen(port, function () {
  console.log("server is running on http://localhost:" + port);
});
