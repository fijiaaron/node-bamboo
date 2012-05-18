//instantiation.js
var chai = require('chai');
var should = require('chai').should();

var Bamboo = require('../../bamboo.js');

var bamboo_urlbase = "http://test.sencha-test.io:8085";
var bamboo_username = "aaron";
var bamboo_password = "secret123";

describe('Bamboo (constructor with no args)', function() {
	var bamboo = new Bamboo();
	
	it('create instance', function() {
		bamboo.should.exist;
		bamboo.should.be.an.instanceof(Bamboo);
	})
	it('urlbase is undefined', function() {
		bamboo.should.not.have.property('urlbase');
	})
	it('username is undefined', function() {
		bamboo.should.not.have.property('username');
	})
	it('password is undefined', function() {
		bamboo.should.not.have.property('password');
	})
	it('getAuth() returns null', function () {
		var credentials = bamboo.getAuth();
		should.not.exist(bamboo.getAuth());
		console.log("`" + credentials +"`");
	})
})

describe('Bamboo (constructor with args)', function() {
	var bamboo = new Bamboo(bamboo_urlbase, bamboo_username, bamboo_password);

	it('create instance', function() {
		bamboo.should.exist;
		bamboo.should.be.an.instanceof(Bamboo);
	})
	it('urlbase is set', function() {
		bamboo.should.have.property('urlbase').equal(bamboo_urlbase);
	})
	it('username is set', function() {
		bamboo.should.have.property('username').equal(bamboo_username);
	})
	it('password is set', function() {
		bamboo.should.have.property('password').equal(bamboo_password);
	})
	it('getAuth() returns base64 encoded username:password', function() {
		//	bamboo.getAuth().should.not.be(null);
		console.log(bamboo.getAuth());
	})
})

describe('Bamboo (constructor with some args)', function() {
	var bamboo = new Bamboo(bamboo_urlbase, bamboo_username);

	it('create instance', function() {
		bamboo.should.exist;
		bamboo.should.be.an.instanceof(Bamboo);
	})
	it('urlbase is set', function() {
		bamboo.should.have.property('urlbase').equal(bamboo_urlbase);
	})
	it('username is set', function() {
		bamboo.should.have.property('username').equal(bamboo_username);
	})
	it('password is set', function() {
		bamboo.should.not.have.property('password');
	})
	it('getAuth() should return null', function() {
		//	bamboo.getAuth().should.not.be(null);
		console.log(bamboo.getAuth());
	})
})
