require('babel/register')

var express = require('express'),
    http = require('http'),
    path = require('path'),
    app = express(),
    request = require('request')

function startServer() {

    function querify(queryParamsObject){
        return '?'+Object.keys(queryParamsObject).map(function(val, key){ return val+'='+queryParamsObject[val] }).join('&')
    }

    // adds a new rule to proxy a localUrl -> webUrl
    // i.e. proxify ('/my/server/google', 'http://google.com/')
    function proxify(localUrl, webUrl){
        app.get(localUrl, function(req, res) {
            req.pipe( request(webUrl + querify(req.query)) ).pipe(res)
        })
    }

    // add your proxies here.
    //
    // examples:
    // proxify('/yummly/recipes', 'http://api.yummly.com/v1/api/recipes');
    // proxify('/brewery/styles', 'https://api.brewerydb.com/v2/styles');

    // all environments
    app.set('port', process.argv[3] || process.env.PORT || 3000)
    app.use(express.static(path.join(__dirname, '')))

    http.createServer(app).listen(app.get('port'), function() {
        console.log('Express server listening on port ' + app.get('port'))
    })

}

module.exports.startServer = startServer