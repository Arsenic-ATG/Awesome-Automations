//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const request = require("request");

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  const id = req.body.country;
  const api = "5f54eed41d8a41c094b9e19a58b356ca";
  const url = "https://newsapi.org/v2/top-headlines?country=" + id + "&apiKey=" + api+" ";

  request(url,{ json: true }, function(err, response, body){
      res.setHeader("Content-Type", "text/html");
     
      if(body.totalResults > 0){
    if(!err && response.statusCode){
      for (var i = 0; i < 10; i++) {
        var image = body.articles[""+i].urlToImage;

      res.write("<h2><b>"+i+".  "+body.articles[""+i].title+"</b></h2><br>");
      res.write(body.articles[""+i].description+"<br>");
      res.write(body.articles[""+i].content+"<br>");
      res.write("<img src ="+image+" width= 200 ><br><br>");
      res.write("<p>Time: "+body.articles[""+i].publishedAt+"</p>");
      res.write('<a href="'+body.articles[""+i].url+'">Details</a>');
      }
    }
      // console.log(json.articles[0].title);

      res.send();
      console.log("status: "+body.status+" total news: "+body.totalResults+"country: "+req.body.country);
    }
    else{
      res.send("Unable to find news from "+req.body.country+" country.");
    }
  });
});






app.listen(process.env.PORT || 3000, function(response) {
  console.log("server is running on port 3000");
});
