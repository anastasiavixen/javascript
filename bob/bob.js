//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var reply = null;
	
	var responses = {
		'shouting':'Whoa, chill out!',
		'asking':'Sure.',
		'stating':'Whatever.',
		'ignoring':'Fine. Be that way!'
	};
		
	var lastChar = input.slice(-1);
	var isUppercase = (input === input.toUpperCase());
	var isOnlyNumbers = (!(input).match(/[a-z]/i));
	
	if(input ==="   " || input ===""){
		reply = responses.ignoring;
	}else if (lastChar == "?" && isUppercase && !isOnlyNumbers){
		reply = responses.shouting;
	}else if (lastChar == "?"){
		reply = responses.asking;
	}else if(isOnlyNumbers){
		reply = responses.stating;		
	}else if(isUppercase){
		reply = responses.shouting;	
	}else{
		reply = responses.stating;
	}
	
	return reply;
};

module.exports = Bob;

console.log(Bob.prototype.hey("lululu"));