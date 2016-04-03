var Discord = require("discord.js")
var OVERRIDE_DISCORD_MIN_VERSION=true

var mybot = new Discord.Client();
var partsArray;
// Dice roll will be in format: /r <diceNum> D<sides> <op1> <mod1>
mybot.on("message", function(message) {
	if (message.content.charAt(0) === "/") {
		partsArray = message.content.split(" ");
		// currently assuming only D6 dice
		var diceNum = +partsArray[1];
		var sides = +partsArray[2].substring(1);
		var op1 = partsArray[3];
		var mod1 = +partsArray[4];
		var sum = 0;
		var result = {};
		var rand;
		if (diceNum <= 20) {
			for (step = 0; step < diceNum; step++) {
				result[step] = {};
				rand = Math.floor(Math.random() * sides + 1);
				//setTimeout(function() {
					console.log(step);
					console.log(rand);
				result[step] = rand;
				//}, 100);
				sum += rand;
			}
			if (op1 === "+") {
				sum += mod1;
			} else if (op1 === "-") {
				sum -= mod1;
			}
			var f = "( ";
			var r;
			for (step = 0; step < diceNum; step++) {
				r = result[step];
				f += r.toString();
				if (step != diceNum-1) {
					f += " + ";
				}
			}
			if (op1 != undefined) {
				f += " )" + op1 + mod1.toString() + " = " + sum.toString();
			} else {
				f += " )" + " = " + sum.toString();
			}
			mybot.sendMessage(message.channel, f);
		}
		//mybot.sendMessage(message.channel, "Works");
	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * max + 1);
}

mybot.login("dicepekbot@gmail.com", "i am a pek bot");
