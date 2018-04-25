var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var tableArray=require("./data/tableData.js");
var waitingArray=require("./data/waitinglistData.js");

var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//require("/routes/apiRoutes.js");

//require("./routes/htmlRoutes.js");
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
});
app.get("/api/tables", function(req, res) {

    return res.json(tableArray);
});
app.get("/api/waitlist", function(req, res) {
    return res.json(waitingArray);
});  

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
}); 
