var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get(("/"), function(req, res){
    res.render("search");
});

app.get("/result", function(req, res){
    var query = req.query.term;
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var parseBody = JSON.parse(body)
            res.render("result", {parseBody: parseBody});
        }
    });
});



app.listen(8000, function(){
    console.log("Movie app has started");
});