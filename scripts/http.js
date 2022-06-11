const http = require('http')

const httpMethods = {}

httpMethods.createServer = function (port) {
    http.createServer(function (req, res){
        if(req.url === "/")
            return res.end('Welcome to our home page') 
        else if(req.url === "/about")
            return res.end('Welcome to our about page') 
         res.end(`<a href="/">Go Back Home</a>`)
    }).listen(port)
}

module.exports = httpMethods