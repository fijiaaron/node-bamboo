var request = require("request");

request.get(

	"http://test.sencha-test.io:8085/rest/api/latest/project.json", 
	function(error, response, body) {
		console.log('callback');
	}
);


var Bamboo = require('./bamboo.js');
var b = new Bamboo('http://test.sencha-test.io:8085', 'aaron', 'secret123');
