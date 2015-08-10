# github-api-profile

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS
* Demonstrate Functional Programming methods
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS

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

## Easy Mode

Recreate the HTML and CSS for the Github tab page (https://github.com/matthiasak?tab=repositories) as your design, and using two AJAX requests/Promises, pull your own profile information from Github:

- Your profile: `https://api.github.com/users/<username>`
- Your repos: `https://api.github.com/users/<username>/repos`

After loading data from the Github API, write at least the following information to the DOM:

- name
- blog
- location
- email
- an `<img>` with its source as the avatar_url
- html_url
- for each repo owned by your user, list that repo in a `<ul>`

## Hard Mode

Create a `GithubClient` Constructor and Prototype chain that implements all the above functionality, but allows you to display multiple profiles on the page by creating multiple instances:

```js
var matt = new GithubClient('matthiasak')
var jesse = new GithubClient('jwo')

matt.appendTo('.container')
jesse.appendTo('.container')
```
