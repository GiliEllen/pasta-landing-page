"use strict";

console.log("Connected!");

var express = require("express");

var app = express();
var port = process.env.PORT || 4000;
app.use(express["static"]('public'));
app.listen(port, function () {
  console.log("Server is listening on port ".concat(port));
});