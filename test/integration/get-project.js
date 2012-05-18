// get-project.js
var i = 0;
var should = require('should');

var Bamboo = require('../../Bamboo');

var config = require('../../test/config/default.js');

describe('Bamboo', function() {

	var bamboo = new Bamboo(config.bamboo.urlbase, config.bamboo.username, config.bamboo.password);
	
	describe('#getProjects', function () {
		it('should return a list of projects', function() {
			var results = bamboo.getProjects();
			should.exist(results);
		})
	})
})