//bamboo.js
//
var request = require('request');
	
// constructor
function Bamboo(urlbase, username, password) {
	this.urlbase = urlbase;
	this.username = username;
	this.password = password;
}


// public methods
Bamboo.prototype.getAuthCredentials=getAuthCredentials;
Bamboo.prototype.getProjects=getProjects;
Bamboo.prototype.getProject=todo;
Bamboo.prototype.getPlans=todo;
Bamboo.prototype.getPlan=todo;


// private attributes

var	prefix = "/rest/api/latest";
 
// private methods

function todo() {}


function getProjects(projectKey) {
	var projects = null;

	var resource = "project";
	var format = "json";

	if (projectKey!=undefined) {
		resource += "/" + projectKey;
	}

	if (format == "json") {
		resource += ".json";
	} 

	var url = this.urlbase + prefix + "/" + resource;
	console.log("url: " + url);
	var headers = { "Authorization" : "Basic " + base64encode(this.username + ":" + this.password) };
	console.log("headers: \n%j", headers);

	request.get(
		{
			url : url,
			headers : headers
		},
		handleResponse 
	);

	return projects;
}

function handleResponse(error, response, body) {
	console.log('callback from bamboo.projects');
	if (error) {
		console.log("ERROR");
		console.log(error);
	}

	if (response) {
		console.log("RESPONSE");
		//console.log(response);
	}

	if (body) {
		console.log("BODY");
		console.log(body);
	}
}


// function get(url, query_string, params) {
//	console.log();
//	console.log("url: " + url);
//	var credentials = base64encode(this.username + ":" + this.password); 
//	console.log("credentials: " + credentials);
//	request.get(
//		{
//			headers : { "Authorization" : "Basic " + credentials },
//			url : url
//		}, 
//		function (error, response, body) {
//			console.log('in request callback');
//			if (error) {
//				console.log("ERROR");
//				console.log(error);
//			}

//			if (response) {
//				console.log("RESPONSE");
//				console.log(response);
//			}

//			if (body) {
//				console.log("BODY");
//				console.log(body);
//			}
//		}
//	);

// }

function getAuthCredentials(username, password) {
	if (username) { this.username = username; }
	if (password) { this.password = password; }

	if (this.username == undefined || this.password == undefined) {
		return null;
	} 

	return base64encode(this.username + ":" + this.password); 
}

function base64encode(text) {
	return new Buffer(text).toString('base64');
}

function base64decode(text) {
	return new Buffer(text, 'base64').toString('ascii');
}

// export
module.exports = Bamboo;