# Etsy

## Objectives

After completing this assignment, you should be able to:

* Demonstrate understanding of functions, loops/array, variadic behavior
* Be able to breakdown a simple process of mathematical steps into a series of statements in JS
* Demonstrate Functional Programming methods
* Demonstrate use of Promises and AJAX methods
* Demonstrate ability to update DOM elements and their attributes/innerHTML via JS
* __Demonstrate an understanding of routing, and it's role in "single page apps"__
* Demonstrate uderstanding of the concepts of MVC, such as Backbone Models, Views and Routers
* Demonstrate knowledge of `new`, constructors, and the prototype chain

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

## Normal Mode

You're going to create an application that:

- has two screens (will be drawn out on the whiteboard)
- will use `hashchange` routing, such as with Backbone.Router (for navigation)
- has two screens:
    - screen 1 (the "home" screen) will display a list of products from Etsy
    - screen 2 (the "details" screen) will display details of a single product from Etsy in greater detail

**Etsy API "getting started":** https://www.etsy.com/developers/documentation/getting_started/api_basics

There will be two screens/routes to be handled:

- `#home` route will render the "active listings" from Etsy, i.e.

    - load the active listings: https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?
    - and render them to the screen

- `#details/:id` route will render a individual product on Etsy in full detail

    - load the item's data, i.e. with the unique id "183182778": https://openapi.etsy.com/v2/listings/183182778.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?
    - and render all the details to the screen

When a user clicks a listing from the home screen, the route should change and the app should draw the selected item's details to the screen.

On the home screen, add a searchbar that would allow the user to enter a keyword. The form `submit` event will change the route to `#search/:keywords`. This new route will have the exact same design as the home page, except the items it renders will be the result of searching Etsy: 

Notice the `&keywords=...` in the following example URL for searching: https://openapi.etsy.com/v2/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&keywords=banana+costume&callback=?.

## Hard Mode

An addition to Easy Mode, display left/right arrows on the details screen (like one would a photo gallery):

- if the user taps the left/right arrow on the page, animate the previous item in the list onto the screen
- if the user hits the left or right arrow on the keyboard, do the same

In addition to the arrows, the details screen should list other products made by the same Etsy artist below in a section titled "Other Listings from this Artist". To find this information, you will need to get the artists unique id from the details JSON, and use that id as the "shop_id" in a request. Notice the `:shop_id` in the the following URL: https://openapi.etsy.com/v2/shops/:shop_id/listings/active.js?api_key=aavnvygu0h5r52qes74x9zvo&callback=?. 

> reference https://www.etsy.com/developers/documentation/reference/listing#method_findallshoplistingsactive

## Nightmare Mode

An addition to Normal and Hard Modes, provide a list of checkboxes on the home screen, by the search form:

- posted in the last week
- on sale
- has 3 pictures

When these checkboxes are selected, the home and search screens should show the results from Etsy, filtered to match the items in the checkboxes.
