# Create a list-filtering Backbone view

## Description
Write a page with a list of items (books, bands, whatever) and a search input and a Backbone View that filters the list as you type.

## Objectives

### Learning Objectives

After completing this assignment, you should…

* Understand the difference between Backbone's `this.on` method and `this.listenTo`.
* Understand what `this` refers to inside of the methods you extend into Backbone.View

### Performance Objectives

After completing this assignment, you be able to effectively use

* Use Backbone.View's `events`,`tagName`,`className`,`initalize`,`render` properties.


## Details

### Deliverables

* A repo containing at least:
	* `gulpfile.js`
	* `package.json`
	* `bower.json`
	* `main.js`
	* `index.html`
	* `test/main.js`
	* `test/index.html`
	* `test/bower.json`
	
### Requirements	

* Passing unit tests
* No JSHint warnings or errors


## Normal Mode

Write a page with a list of items (books, bands, whatever) and a search box (`<input type="search">`). Using test driven development, write a Backbone View that filters the list as you type.

## Hard Mode

Try and add animations so that the items don't just blink out of existence as they're being filtered. A good way of doing this is to add a function to the view that animates it then removes it from the DOM. Some things to look into:

  - $.on('transitionend')
  - Backbone.View#remove

Use tiny pizza server to fetch the items using AJAX. Then add create, update, and delete functionality.

## Notes

Write tests first! If you haven't yet, read the bower home page.
Install Backbone using bower and include it in your page, keeping in mind that the comments that are in the yeoman scaffold have special meaning.

Pro Tip: A good way of organizing your list would be to have a single View that is in control of the `<ul>`, and a View that represents each `<li>`. The `<ul>` could have a render function that renders the `<ul>` and a `renderChildren(items)` method that renders the `<li>`s for either the whole list or a filtered list. Or, you can just render the children in your "glue code" if that seems too complicated.

## Additional Resources

* Read [Six Reasons to Define Constructors with Only One Argument](https://gcanti.github.io/2014/09/25/six-reasons-to-define-constructors-with-only-one-argument.html)
* Read [TDD, where did it all go wrong](http://vimeo.com/68375232)