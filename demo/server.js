var express = require("express");
var app = express();

app.configure(function() {
  var hourMs = 1000*60*60;
  app.use(express.static(__dirname + '/', { maxAge: hourMs }));
  app.use(express.directory(__dirname + '/'));
  app.use(express.errorHandler());
});

app.listen(8081);