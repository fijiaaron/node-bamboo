//test_bamboo.js

var Bamboo = require('./bamboo');


console.log("1. create new Bamboo object with no arguments" + 
		" should have undefined properties" + 
		" and null response from getAuth()");
var bamboo = new Bamboo();
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth(bamboo.username, bamboo.password));
console.log("---");


console.log("2. create a new Bamboo object with only url argument" + 
		" should have url assigned" + 
		" and undefined username and password " + 
		" and null response from getAuth()");
var bamboo = new Bamboo("http://test.sencha-test.io:8085/");
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth());
console.log("---");


console.log("3. create a new Bamboo object with url, username, and password arguments" +
		" should have all properties assigned" + 
		" and getAuth() should return base64 encoded username:password");
var bamboo = new Bamboo("http://test.sencha-test.io:8085/", "username", "password");
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth());
console.log("---");


console.log("4. create a new Bamboo object with no arguments" +
		" should have undefined properties" +
		" and calling getAuth() with username and password arguments" + 
		" should return base64 encoded username:password");
var bamboo = new Bamboo();
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth("username", "password"));
console.log("---");


console.log("5. create new Bamboo object with no arguments" + 
		" and set url, username, and password" +
		" should have url, username, and password assigned" + 
		" and getAuth() should return base64 encoded username:password ");
var bamboo = new Bamboo();
bamboo.url = "http://test.sencha-test.io:8085/";
bamboo.username = "username";
bamboo.password = "password";
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth());
console.log("---");


console.log("6. create new Bamboo object with url, usrname, and password arguments" +
		" should have properties assigned" + 
		" and calling getAuth() with different username and password" +
		" should return base64 encoded new username:password" + 
		" and username and password should be assigned the new values");
var bamboo = new Bamboo("http://test.sencha-test.io:8085/", "username", "password");
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth("newusername", "newpassword"));
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("---");


console.log("7. create a new Bamboo object with url and username -- no password" +
		" should have url and username assigned" +
		" but undefined password" + 
		" and getAuth() should return null");
var bamboo = new Bamboo("http://test.sencha-test.io:8085/", "username");
console.log("bamboo.url : " + bamboo.url);
console.log("bamboo.username : " + bamboo.username);
console.log("bamboo.password : " + bamboo.password);
console.log("bamboo.getAuth() : " + bamboo.getAuth());
console.log("---");


