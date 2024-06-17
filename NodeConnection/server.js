var http = require('http')
var url = require('url')

http.createServer(function(req,res)
{
    var route = req.url
    if(route==='/'){
        res.end('this is information from backend to frontend')
    }
    if(route==='/getusernames'){
        var username=['vikas','harsh','uthkarsh']
        res.end(JSON.stringify(username))
    }
    console.log('My node js server started succesfully')

}).listen(5000)