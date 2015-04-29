Canvas Talk 2


> We wanted to match the polish and performance of our native apps, but in a way that felt true to the browser.
> 
> http://engineering.flipboard.com/2015/02/mobile-web/

In the DOM, animations in CSS/JS will only truly be **fast** if you limit animations to:

- opacity
- transforms

This is because the GPU can optimize these. All other properties being changed (including color), will involve the CPU to some extend and a re-rendering of a bitmap into GPU memory.

Animations on the DOM can be really fast. But lots of animations and can really bog down the browser on the desktop (which can be even worse on mobile devices).

Before we talk about canvas, let's make an analogy to an artist in her studio. 

- Scenario #1:

    Imagine this artist has a blank canvas, and several colorful sheets of paper. The artist makes pictures by moving the sheets of paper around the canvas and pinning them there. These sheets of paper maintain some size and state, can be pinned on top of each other, etc.

    This process would be akin to the browser rendering the DOM.

- Scenario #2:

    Imagine the artist now has another blank canvas and a series of paint cans. The artist makes pictures by throwing paint onto the canvas. Once the paint is on the canvas, the only way to change the color at that section is to paint over it. This canvas has no retained state (sheets of paper). There is merely one bitmap, and the artist can throw paint on the canvas to alter this bitmap.

    This process would be aking to the browser painting to a canvas element.

# Canvas

Canvas is called an "immediate mode" layer. It retains no information about the objects drawn into it. We can either wipe the slate clean, or paint more colors on top of existing colors.

The DOM renders in a "retained mode". The DOM maintains a heirarchy of HTML elements (like the paper).

The DOM is styled and drawn for us by the browser. Canvas is drawn by us with veyr explicit commands.

# Some key differences

- DOM Elements
    + have attributes (class, id, type, style, etc)
    + CSS styles
    + innerText, innerHTML
    + events
    + and so forth..

- Canvas
    + is a single, dynamic bitmap rendered to the screen
    + has no simple notion of events on sections of the canvas (similarly, you can't click on pieces of an `<img>` without specific JS handling click events on regions of the image)
    + has no retained visual state... once items are drawn, they can't be moved.

# Some neat mechanics about games and animation loops

- The game loop
    + `requestAnimationFrame`
- Modelling simulations
- Plugging into the game loop
- stateful recurrences

# The game loop

`requestAnimationFrame` (or `rAF` for short) will run the callback function in-sync with the browser's rendering thread.

If this makes little sense, think of this in relation to a timed game of Connect-4. You have only a certain window of time before the board gets wiped clean, and you have to redraw. If you are drawing and the board is wiped clean in the middle of drawing, then this results in a "screen tear". 

This might also sound familiar: "v-sync" in computer games.

`rAF` helps us run code that visually updates the screen in sync with the browser's rendering.

Using `rAF` has three really nice side-effects:

1. The callback will only be invoked _at most_ 60 times per second because your screen can only render at 60Hz, or 60fps. (Need research for 120Hz displays). 
2. `rAF` will scale back to give your CPU "breathing room" if 60fps is "too much".
3. `rAF` doesn't fire when you navigate to another tab, this effectively pausing expensive drawing operations when the browser tab is not visible.

Version 1, no `rAF`:

```js
function draw(){} // idempotent

setInterval(1000/60, draw) //16ms
```

Version 2, uses `rAF`:

```js
function draw(){ // idempotent

    requestAnimationFrame(draw);
}
```

# Canvas API

> (make sure to grok context properties in Chrome Debugger)

- fillText
- fillRect
- fillLine
- moveTo
- lineTo
- ...

# Examples to work from

See the experiments on Matt's Codepen: http://codepen.io/matthiasak/public



