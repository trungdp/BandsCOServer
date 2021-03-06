var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');
var bodyParser = require('body-parser');
const Route = require('./routes/Index');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'Client')));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res) {
    res.render("Index");
});
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    res.setHeader('Content-Type', 'application/json');
    next();
});

Route(app);


app.listen(process.env.PORT || 3300, () => {
    console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);
});