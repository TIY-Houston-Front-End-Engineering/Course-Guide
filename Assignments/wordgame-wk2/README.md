# Wordgame

## Description

You know the word-guessing game hangman? Well that's what you'll be building with this assignment.

Basically, it works like this:

- The app starts by choosing a random word
- The player can guess a single letter at a time
- The player has a fixed number of turns in which to guess all of the letters in the word
- The app should indicate when the player has won or lost

You can get super fancy with it... Click this image to see an example:

[![Wordgame demo](http://img.youtube.com/vi/HcV0MzGTSGE/0.jpg)](https://www.youtube.com/watch?v=HcV0MzGTSGE)

## Objectives

After completing this assignment, you should…

- Understand functions, conditionals, loops, arrays
- Be able to properly sequence JavaScript statements
- Be able to change the DOM based on application state (win/loss, valid/invalid guess)

## Details

### Instructions

- Create your project
- Create a file called `js/common-words.js` and paste this into it:

```javascript
// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];
```

### Example

Say your game logic has chosen the word: "hello".

You should display:

    _ _ _ _ _

A visual indication (such as an underscore) for each letter in the word.

You should also display the number of turns remaining:

    Turns: 8

Next, the user guesses: a

You should decrement the number of turns remaining:

    Turns: 7

Next, the user guesses: l

You should display:

    _ _ l l _

And so forth.

### Deliverables

- An app running on gh-pages, containing at least:
  - `index.html`
  - One or more CSS files (e.g. `css/main.css`)
  - One or more JavaScript files (e.g. `js/main.js`)

## Normal Mode

The game should:

- Choose a random word *of 3 letters or more* from the `commonWords` array
- Allow the user to guess one letter at a time
- When the user runs out of turns, show a losing screen
- When the user guesses all of the letters in the word, show a winning screen

## Hard Mode

Normal mode plus the following:

- Make it look good!
- Don't let the user guess the same letter more than once
- Display all guesses on screen so the user knows what letters he/she has guessed already

## Nightmare Mode

Hard mode plus any or all of the following:

- Instead of showing the number of turns, you could show a health meter
- Try playing a sound when the user guesses incorrectly
- When the player loses, play a video or show some funny losing animation
