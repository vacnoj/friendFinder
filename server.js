var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var http = require('http');
var fs = require('fs');
// var html = require("./app/routing/htmlRoutes");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//====================================================
//Body
// var server = http.createServer(handleRequest);
// function handleRequest(req, res) {
//   // Capture the url the request is made to
//   var path = req.url;
  // When we visit different urls, read and respond with different files
//   switch (path) {
    // case "/survey":
    fs.readFile(__dirname + "/app/routing/htmlRoutes.js" , function(err, data) {
        // res.writeHead(200, { "Content-Type": "text/html" });
        // res.end(data);

        if (err) {
            console.log(err);
        }
      });
    
    // default to rendering index.html, if none of above cases are hit
//     default:
//       return fs.readFile(__dirname + "/index.html", function(err, data) {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       });
//   }
// }



//====================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });