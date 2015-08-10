function* chooseYourAdventure() {
	console.log(yield adventure.say('Hey there!'));
	console.log(yield adventure.say('Woah', 'This is cool'));
	console.log(yield adventure.ask('Woah', 'This is cool'));
	console.log(yield adventure.choose('Woah', 'This is cool', 'Hello world'));
	console.log(yield adventure.say('That\'s all folks!', 'THE END'));
}