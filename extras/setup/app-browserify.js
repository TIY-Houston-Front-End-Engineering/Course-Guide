"use strict";

// es6 polyfills, powered by babel
require("babel/register")

// other stuff that we don't really use in our own code
var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
var Router = require('./app.js')

window.addEventListener('load', app)

function app() {
    // start app
    new Router()
}
