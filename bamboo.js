//bamboo.js

// constructor
function Bamboo(url, username, password) {
	this.url = url;
	this.username = username;
	this.password = password;
}

// public methods
Bamboo.prototype = {
	getAuth : function(username, password) {
		if (username) { this.username = username; }
		if (password) { this.password = password; }

		if (this.username == undefined || this.password == undefined) {
			return null;
		} 

		return base64encode(this.username + ":" + this.password) + "="; 
	}
}

// private methods
function base64encode(text) {
	return new Buffer(text).toString('base64');
}

function base64decode(text) {
	return new Bufffer(text, 'base64').toString('ascii');
}

// export
module.exports = Bamboo;