# Soundcloud

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS
* Demonstrate Functional Programming methods
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* Demonstrate uderstanding of the concepts of MVC, such as Backbone Models, Views and Routers
* Demonstrate knowledge of `new`, constructors, and the prototype chain
* Demonstrate knowledge of composing views and handling events with React, Backbone, Ember, or Angular
* Understand CSS 3D transforms, CSS animations, and form skinning
* Understand saving JSON via a RESTful interface (i.e. tiny pizza server, Restly, Parse, Firebase, or some other backend) _[hard mode]_

## Setup

```sh
# cd into GH project folder
# then mkdir <projectName>
# then git init
# then hub create <projectName> to create the repo on Github, too
# then setup your project files (i.e. download package.json and run `npm install`)
```

## Deliverables

* A publicly visible website (gh-pages, divshot, heroku, etc...)

# Normal Mode

Write a view layer (i.e. React Component, Backbone View, Angular Directive, Ember View, etc) that handles events and creation of Todo items. Todo items can be marked as `done`, marked as `urgent`, and can have a `date` assigned to them, as well as a `description`.

Visual Inspiration:

![](./1.gif)

## Hard Mode

In addition to Normal Mode:

- Have the data source (Backbone Collection, jQuery, Angular Service, etc) load and save Todos from a RESTful API or service (such as Parse, Firebase, tiny-pizza-server, etc)
- When a Todo is created, its description is changed, marked as urgent, marked as done, or is given a date, save it online

## Nightmare Mode

In addition to Hard Mode:

- Add the ability for users of the app to register and login
- If a user is not logged in, force them to either login or register
- A user can only see/edit her own Todos
