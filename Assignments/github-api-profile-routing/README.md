# github-api-profile

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS
* Demonstrate Functional Programming methods
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* __Demonstrate an understanding of routing, and it's role in "single page apps"__

## Details

### Instructions

```sh
# cd into GH project folder
# then mkdir <projectName>
# then git init
# then hub create <projectName> to create the repo on Github, too
# then setup your project files (i.e. download package.json and run `npm install`)
```

### Deliverables

* A publicly visible website on `gh-pages`

### Requirements

* No JSHint warnings or errors
* No JS errors in the browser
* All functions and code should work according to the following description.

## Hard Mode

Just as in the single [GitHub Profile assignment](https://github.com/matthiasak/js-assignments/tree/master/github-api-profile), 

- recreate the HTML and CSS for the Github tab page (https://github.com/matthiasak?tab=repositories)
- using two AJAX requests/Promises, pull your own profile information from Github:
    - your profile data: `https://api.github.com/users/<username>`
    - your repo list: `https://api.github.com/users/<username>/repos`

Using a router (such as `Backbone.Router`), let the `hashroute` determine what username is drawn to the screen.

For example, if `http://localhost:3000/#matthiasak` is in the URL, then the profile `matthiasak` will be drawn to the screen. If the user changes the hashroute to `#jwo`, then the Github user `jwo` will be drawn to the screen.
