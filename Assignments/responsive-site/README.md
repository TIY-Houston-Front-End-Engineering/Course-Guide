# Responsive Site

## Description
This assignment will walk you through creating a fully responsive website from start to finish.


## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand how to implement a responsive website
* Have experience searching for answers on Google, StackOverflow and MDN.


### Performance Objectives

After completing this assignment, you be able to effectively use

* CSS media queries
* Advanced CSS properties

## Details

### Deliverables

* A repo containing at least:
  * `dist/index.html`
  * `dist/images/background.png`
  * `dist/css/style.css`

### Requirements

* No real W3C validation errors
* The fourth breakpoint should have a fixed with of 980px for the main content.
* You must use [Normalize.css](http://necolas.github.io/normalize.css/) for cross browser consistency.


## Normal Mode
Using the breakpoint images below, create the the website using HTML and CSS. For each breakpoint, starting with the first, you *must* have at least one commit of your work. Starting with the mobile breakpoint first will save you a lot of headaches and is manditory for this assignment. All files should be saved in a dist directory in the root of your repository.

1. [Breakpoint 1](breakpoint1.png) - 0 to 478px
2. [Breakpoint 2](breakpoint2.png) - 479px to 767px
3. [Breakpoint 3](breakpoint3.png) - 767px to 978px
4. [Breakpoint 4](breakpoint4.png) - 979px and larger

The image used on this website [can be found here](background.jpg).


## Notes

For the first three breakpoints, the content (pricing boxes and paragraphs) should stretch to fit the width of the page as it scales. For the fourth breakpoint, the content should max out at 980px and not grow larger than that. Instead it should stay centered on the page.

I recommend that you glance over all of the breakpoints before you write any code to get a feel for how the different elements move around. Structure your HTML in a way that will make it easy to make these adjustments **only using css**. We can't modify our HTML based on page width, only our CSS, so your HTML needs to remain consistent no-matter what the width of the page is.

## Additional Resources

* Read [css-media-queries](https://github.com/TIY-Austin-Front-End-Engineering/Curriculum/tree/master/css-media-queries)
