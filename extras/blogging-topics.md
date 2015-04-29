## CSS Blogging Topics

- read and reflect on Mary Rose Cook's "Intro to Practical Functional Programming" (http://maryrosecook.com/blog/post/a-practical-introduction-to-functional-programming)
- read, write examples of, make our own: ["Exploring Canvas Drawing Tachniques"](http://perfectionkills.com/exploring-canvas-drawing-techniques/)
- What is the difference between classes and ID's in CSS?
- Describe what a "reset" CSS file does and how it's useful.
- Describe Floats and how they work.
- Describe z-index and how stacking context is formed.
- What are the various clearing techniques and which is appropriate for what context?
- Explain CSS sprites, and how you would implement them on a page or site.
- What are your favourite image replacement techniques and which do you use when?
- CSS property hacks, conditionally included .css files, or... something else?
- How do you serve your pages for feature-constrained browsers?
- What techniques/processes do you use?
- What are the different ways to visually hide content (and make it available only for screen readers)?
- Have you ever used a grid system, and if so, what do you prefer?
- Have you used or implemented media queries or mobile specific layouts/CSS?
- Any familiarity with styling SVG?
- How do you optimize your webpages for print?
- What are some of the "gotchas" for writing efficient CSS?
- What are the advantages/disadvantages of using CSS preprocessors? (Sass, Compass, Stylus, LESS)
- If so, describe what you like and dislike about the CSS preprocessors you have used.
- How would you implement a web design comp that uses non-standard fonts?
- Explain how a browser determines what elements match a CSS selector.
- Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
- What does * { box-sizing: border-box; } do? What are its advantages?
- List as many values for the display property that you can remember.
- What's the difference between inline and inline-block?
- What's the difference between a relative, fixed, absolute and statically positioned element?
- The 'C' in CSS stands for Cascading. How is priority determined in assigning styles (a few examples)? How can you use this system to your advantage?
- What existing CSS frameworks have you used locally, or in production? (Bootstrap, PureCSS, Foundation etc.)
- If so, which ones? If you could, how would you change/improve them?
- Have you played around with the new CSS Flexbox or Grid specs?
- How is responsive design different from adaptive design?
- Have you ever worked with retina graphics? If so, when and what techniques did you use?

## JS Blogging Topics

- Explain event delegation
- Explain how this works in JavaScript
- Explain how prototypal inheritance works
- How do you go about testing your JavaScript?
- AMD vs. CommonJS?
- Explain why the following doesn't work as an IIFE: function foo(){ }();.
- What needs to be changed to properly make it an IIFE?
- What's the difference between a variable that is: null, undefined or undeclared?
- How would you go about checking for any of these states?
- What is a closure, and how/why would you use one?
- What's a typical use case for anonymous functions?
- How do you organize your code? (module pattern, classical inheritance?)
- What's the difference between host objects and native objects?
- Difference between: function Person(){}, var person = Person(), and var person = new Person()?
- What's the difference between .call and .apply?
- Explain Function.prototype.bind.
- When do you optimize your code?
- When would you use document.write()?
- What's the difference between feature detection, feature inference, and using the UA string
- Explain AJAX in as much detail as possible.
- Explain how JSONP works (and how it's not really AJAX).
- Have you ever used JavaScript templating?
- If so, what libraries have you used? (Mustache.js, Handlebars etc.)
- Explain "hoisting".
- Describe event bubbling.
- What's the difference between an "attribute" and a "property"?
- Why is extending built in JavaScript objects not a good idea?
- Difference between document load event and document ready event?
- What is the difference between == and ===?
- Explain the same-origin policy with regards to JavaScript.
- Make this work: `duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]`
- Why is it called a Ternary expression, what does the word "Ternary" indicate?
- What is "use strict";? what are the advantages and disadvantages to using it?
- Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5
- Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
- Question: How would you make this work?

    ```js
    add(2, 5); // 7
    add(2)(5); // 7
    ```

- Question: Can you explain how `sum()` works?

    ```js
    function sum(head, rest){
        if(head instanceof Array){
            return sum(head[0], head.slice(1));
        }
        return (head || 0) + (rest.length ? sum(rest[0], rest.slice(1)) : 0);
    }

    sum(1) // 1
    sum([1, 2, 3, 4, 5]) // 15
    ```

- Question: Can you explain how `factorial()` works?

    ```js
    function factorial (n) {
        return n ? n * factorial(n - 1) : 1
    }
    ```
