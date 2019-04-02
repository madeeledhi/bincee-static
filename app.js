var express = require('express');
var compress = require('compression');
var app = express();

// Use compress middleware to gzip content
app.use(compress());

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8000);