var express = require("express");
var Gun = require("gun");

var app = express();
app.use(Gun.serve).use(express.static(__dirname));

var server = app.listen(process.env.PORT || 80);
Gun({ web: server });
