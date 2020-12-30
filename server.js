var http = require ('http') //using http module for create a web server..
var fs = require('fs') //fs library 
const port = 80

var server = http.createServer(function (request, response) { //create a web server from http module..
    var date = new Date();
    var formatdate = date.getDate() + "." + (date.getMonth() + 1) 
    + "." + date.getFullYear();
    formatdate += " " + date.getHours() + ":" + date.getMinutes();
    console.log(formatdate)
    response.end(formatdate)
})

server.listen(port)
console.log('Server is listening on port' +port)
    
