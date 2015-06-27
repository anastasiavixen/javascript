//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
	var reply = "";
	if(input == ""){
		reply = "Hello, world!";
	}else{
		reply = "Hello, " + input + "!";
	}
	return reply;
};

module.exports = HelloWorld;

//console.log(HelloWorld.prototype.hello(""));
//console.log(HelloWorld.prototype.hello("Sally"));
//console.log(HelloWorld.prototype.hello("Bob"));