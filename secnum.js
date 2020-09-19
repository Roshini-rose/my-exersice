var num= 4;
var numguess= prompt("Guess a number!");
var guess= Number(numguess);
if (guess===num) {
	alert("You got it right");
}
else if (guess > num) {
	alert("Too high.Try again");
}
else{
	alert("Too low. Guess again");
}