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

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body-parser middleware
    var newcustomer = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newcustomer);
  
    tableArray.push(newcustomer);
    if(tableArray.length>5){
        waitingArray.push(newcustomer);
    }
  
    res.sendFile(path.join(__dirname, "public/tables.html"));
  });

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
}); 
