//authorization.js
var should = require('should')

var Bamboo = require('../../Bamboo');

describe('Bamboo', function() {
	var bamboo = new Bamboo();

	describe('getAuth()', function() {
		it('should return null when username and password are not set', function() {
			should.not.exist(bamboo.getAuth());
		})
	})
})
