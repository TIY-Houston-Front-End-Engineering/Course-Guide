# Memory

## Description

Memory is a simple game you probably played as a kid. You have a bunch of cards arranged
with their backs facing up. You flip two over. If they match, they remain face up. If they
don't match, you flip them back over.

You can see a working version of the game [here](http://chrisdavies.github.io/memory/)

## Objectives

After completing this assignment, you should…

- Understand functions, conditionals, loops, arrays
- Be able to properly sequence JavaScript statements
- Be able to change the DOM based on application state (win/loss, valid/invalid guess)
- Be able to create (or at least modify) CSS animations
  - See [here](http://www.justinaguilar.com/animations/index.html) for animation examples
- Be able to use icon fonts effectively
- Be able to use JavaScript templates
- Be able to use JavaScript routing to show HTML based on the URL

## Details

### Instructions

Focus on minimum viable product (MVP). What would that look like for the memory game?

- Forget about the new game screen
- Forget about the win! screen
- Forget about the lose screen
- Forget about the timer
- Forget about lives
- Focus on getting the actual game to work first! Then focus on the next feature.

#### Routing

Use routing to enable users to share links to the "new game" screen, to the "hard game" screen and the
"easy game" screen. The "win game" and "lose game" screens should not be accessible via routes, but
only as the result of either winning or losing the game.

### Deliverables

- An app running on gh-pages, containing at least:
  - `index.html`
  - One or more CSS files (e.g. `css/main.css`)
  - One or more JavaScript files (e.g. `js/main.js`)

## Normal Mode

The game should:

- Have a "new game" screen with a single choice "new game"
- The game should have a total of 9 pairs (18 cards total)
- When the user runs out of turns, show a losing screen
- When the user finds a match, leave the cards face up and disallow clicking those cards
- When the chooses two cards that do not match, flip them back over
- When the user wins or loses, indicate as much
- All screens should be generated via JavaScript templates

## Hard Mode

Normal mode plus any/all of the following:

- Add in the game-clock
- Add in animations for card-flips
- Calculate score based on how many failed attempts and how much time the user took
  - More time, more incorrect guesses = lower score
- Change the "new game" screen to give the user 2 choices
  - "Easy" = 18 cards
  - "Hard" = 24 cards and/or fewer lives
- Add in animations for win/lose screens
- Add in sounds for card flipping, loss of life, game-over screens
