var http = require('http');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/credentials', function(req, res) {
	var credentials = {
		'awsAccessKeyId' : '123456789',
		'awsSecretKey' : 'dbsjdb123456789sbdae834884885'
	};
	res.json(credentials);
	res.end();
});


app.listen(port, function() {
	console.log("Listening on port: " + port);
});
