var express = require("express");
var compress = require("compression");
var app = express();

// Use compress middleware to gzip content
app.use(compress());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve up content from public directory
app.use(express.static(__dirname + "/public"));

app.listen(9000);
