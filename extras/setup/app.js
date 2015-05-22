var BB = require('backbone'),
    // use vanilla JS instead of jQuery for views / DOM stuff
    NV = require('backbone.nativeview'),
    _ = require('underscore')

// use vanilla JS for AJAX too (also uses window.fetch()
// polyfill, which that itself uses the es6-promise polyfill.)
// Native ALL TEH THINGS!
BB.ajax = require('backbone.nativeajax')

export default BB.Router.extend({
    initialize() {
        this.testView = new testView()
        this.testModel = new testModel()
        BB.history.start()
    },
    routes: {
        '*default': 'home'
    },
    home() {
        this.testView.render()
    }
})

var testView = BB.NativeView.extend({
    el: '.container',
    initialize() {

    },
    events: {

    },
    render() {
        this.el.innerHTML = this.template({ name: 'Matt' })
    },
    template: _.template(
        `Here's a multiline string.
        <h1><%= name %></h1>
        <p>and some other stuff?</p>`
    )
})

var testModel = BB.Model.extend({
    url: "/",
    initialize() {
        this.fetch().then((data) => {
            console.log(data)
        })
    }
})