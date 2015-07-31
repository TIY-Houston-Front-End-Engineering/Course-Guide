# JavaScript Guessing Game

## Description
Generate a random integer between 1 and 100. Prompt the user to guess the number.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to use while loops
* Understand boolean logic


### Performance Objectives

After completing this assignment, you be able to effectively use

* Use some tool or technique



## Details

### Deliverables

* A repo containing at least:
  * `dist/main.js`
  * `dist/index.html`

### Requirements

* No JSHint warnings or errors


## Normal Mode
Download the `dist.zip` file in this repository and unzip it. Modify the `main.js` file to create a number guessing game. Your game will randomly generate an integer (whole number) between 1 and 100. Using the game.ask command, you should ask the user to guess the randomly generate number. If their guess is too low, it should inform them that the guess was too low and prompt them to guess again. If their guess is too high it should inform them that their guess was too high, and prompt them to guess again. If they correctly guess the number it should inform them that they won.

Use the following commands to create the game...

1. `yield game.say` says something to the user. It can take two arguments, a heading and a sub-heading.
2. `yield game.ask` prompts the user to input something into a text box. Takes one argument, a question to ask the user. The users input is returned.
3. `yield game.choose` prompts the user to select an option from a list of options. Takes two or more arguments. The first argument is the question to ask the user. The subsequent arguments are the options that the user can choose from.


## Hard Mode
Update your game so that when a user wins, it prompts them to either quit or play again. If they choose to play again, the game should start over with a new random number. If they choose to quit, it should show a goodbye message.

If you feel the urge, re-style the game by modifying the Sass.


## Notes

<!-- Notes go here...
 -->
## Additional Resources

<!-- * Read []()
 -->