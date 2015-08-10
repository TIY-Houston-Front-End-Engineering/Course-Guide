# weather-app

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS
* Demonstrate Functional Programming methods
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* __Demonstrate an understanding of routing, and it's role in "single page apps"__
* Demonstrate uderstanding of the concepts of MVC, such as Backbone Models, Views and Routers

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

* A publicly visible website (gh-pages, divshot, heroku, etc...)

### Requirements

* No JSHint warnings or errors
* All specifications met below

## Normal Mode

Create an app that uses your device/computer's geolocation, and makes a request to Forecast.io with that (lat,lng) and any search parameters.

- You should wireframe and design a basic layout before starting this app.
- Your app should use HTML/SCSS extensively for styling.
- You should use some library or framework that provides routing to handle various hash-routes. Your routes should be:
    - `http://localhost:3000/#home`
    - `http://localhost:3000/#weather/:lat/:lng`

## Nightmare Mode

1. In addition to Normal Mode, give your app an extra search bar that allows you to search for weather in other cities around the world.
2. Add the ability to show multiple HomeViews and be able to swipe between them.
