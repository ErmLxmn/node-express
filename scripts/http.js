const http = require('http')

const httpMethods = {}

httpMethods.get = function(route, callback){
    let server = http.createServer(function (req, res){
        if(req.url === route)
            callback(req, res)
        else
            res.end("Error page doenst exist")
    })

    return server.listen(3000)
} 

module.exports = httpMethods