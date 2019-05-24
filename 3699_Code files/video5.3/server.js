var express = require("express");
var bodyParser = require("body-parser")

var app = express();
app.use(bodyParser.json())
app.use(express.static(__dirname));

var server = app.listen(9000, function() {
    console.log("Listening on port %d", server.address().port);
});

var cards = [
		{language:1, source: "one", target: "eins"},
		{language:1, source: "two", target: "zwei"},
		{language:1, source: "three", target: "drei"},
		{language:1, source: "four", target: "view"},
	];

app.get("/cards", function(req, res, next){
	res.send(cards);
});

app.post("/cards", function(req, res, next){
	console.log(req.body);
	var card = req.body;
	cards.push(card);
	res.send(201);
});