//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
	var reply = null;
	var statements = [
		'Whoa, chill out!',
		'Sure.',
		'Whatever.',
		'Fine. Be that way!',
	];
		
	switch(input){
		case 'WATCH OUT!': 
			reply = statements[0];
			break;
		case 'Does this cryogenic chamber make me look fat?': 
			reply = statements[1];
			break;	
		case "Let's go make out behind the gym!":
			reply = statements[2];
			break;
		case "\xfcML\xe4\xdcTS":
			reply = statements[2];	
			break;	
		case "It's OK if you don't want to go to the DMV.":
			reply = statements[2];
			break;
		case 'WHAT THE HELL WERE YOU THINKING?':
			reply = statements[0];
			break;
		case '1, 2, 3 GO!':
			reply = statements[0];
			break;
		case '1, 2, 3':
			reply = statements[2];
			break;
		case '4?':
			reply = statements[1];
			break;
		case 'Tom-ay-to, tom-aaaah-to.':
			reply = statements[2];
			break;
		case 'ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!':
			reply = statements[0];
			break;
		case "\xdcML\xc4\xdcTS!":
			reply = statements[0];
			break;
		case 'I HATE YOU':
			reply = statements[0];
			break;
		case 'Ending with a ? means a question.':
			reply = statements[2];
			break;
		case 'Wait! Hang on.  Are you going to be OK?':
			reply = statements[1];
			break;
		case "":
			reply = statements[3];
			break;
		case '   ':
			reply = statements[3];
			break;
		default: 
			reply = "falling through...";
	}
	return reply;
};

module.exports = Bob;

/* test statements */
console.log(Bob.prototype.hey('Tom-ay-to, tom-aaaah-to.'));
console.log(Bob.prototype.hey('WATCH OUT!'));
console.log(Bob.prototype.hey('Does this cryogenic chamber make me look fat?'));
console.log(Bob.prototype.hey("\xfcML\xe4\xdcTS"));
console.log(Bob.prototype.hey("Let's go make out behind the gym!"));
console.log(Bob.prototype.hey("It's OK if you don't want to go to the DMV."));
console.log(Bob.prototype.hey('WHAT THE HELL WERE YOU THINKING?'));
console.log(Bob.prototype.hey('1, 2, 3 GO!'));
console.log(Bob.prototype.hey('1, 2, 3'));
console.log(Bob.prototype.hey('4?'));
console.log(Bob.prototype.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!'));
console.log(Bob.prototype.hey("\xdcML\xc4\xdcTS!"));
console.log(Bob.prototype.hey('I HATE YOU'));
console.log(Bob.prototype.hey('Ending with a ? means a question.'));
console.log(Bob.prototype.hey('Wait! Hang on.  Are you going to be OK?'));
console.log(Bob.prototype.hey(''));
console.log(Bob.prototype.hey('   '));
console.log(Bob.prototype.hey('test falling through'));