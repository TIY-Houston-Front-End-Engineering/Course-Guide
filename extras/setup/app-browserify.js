"use strict";

// es6 polyfills, powered by babel
require("babel/register")

// other stuff that we don't really use in our own code
var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
// var _777 = require("./777.js")

window.onload = app;

function app(){
    document.querySelector("html").style.opacity = 1;
    // start app?
    // new _777.SevensRouter();
}