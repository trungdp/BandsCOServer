var path = require("path");
var express = require("express");
var app = express();
var server = require('http').createServer(app);
var fs = require('fs');


//Chỉ ra đường dẫn chứa css, js, images...
app.use(express.static(path.join(__dirname, 'Client')));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res) {
    res.render("Index");
});

app.listen(process.env.PORT || 3300, () => {
    console.log("Express server listening on port %d in %s mode", process.env.PORT, app.settings.env);
});