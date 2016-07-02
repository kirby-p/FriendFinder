var express = require("express"),
	path = require("path"),
	bodyParser = require("body-parser"),
	app = express(),
	Port = 4000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

app.listen(Port, function() {
	console.log("App listening on PORT: " + Port);
});