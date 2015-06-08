var BB = require('backbone'),
    _ = require('underscore')

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

var testView = BB.extend({
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