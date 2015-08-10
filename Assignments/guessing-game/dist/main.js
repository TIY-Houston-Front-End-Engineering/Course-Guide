function* guessingGame() {
	yield game.say('Hey there!');

	function guessGame() {
		yield game.say('test');
		// var numGuessed = yield game.say('Guess a number between 1 and 100!');
	}

	guessGame();
	// console.log(yield game.say('Hey there!'));
	// console.log(yield game.say('Woah', 'This is cool'));
	// console.log(yield game.ask('Woah', 'This is cool'));
	// console.log(yield game.choose('Woah', 'This is cool', 'Hello world'));
	// console.log(yield game.say('That\'s all folks!', 'THE END'));
}