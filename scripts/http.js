const http = require('http')

const httpMethods = {}
let routes = {}

httpMethods.get = function(route, callback){
    routes[route] = {route , callback}
    this.server = http.createServer();
    this.server.on('request' , function (req, res){
        if(req.url === '/favicon.ico'){
            return res.end()
        }else if(routes[req.url]){
            let here = routes[req.url]
            let invoke = here['callback']
            return invoke(req, res)
        }
        else{
            return res.end("Page Doesn't Exist")
        }
    })
} 

httpMethods.post = function(route, callback){
    routes[route] = {route , callback}
    this.server = http.createServer();
    this.server.on('request' , function (req, res){
        if(req.url === '/favicon.ico'){
            return res.end()
        }else if(routes[req.url]){
            let here = routes[req.url]
            let invoke = here['callback']
            return invoke(req, res)
        }
        else{
            return res.end("Page Doesn't Exist")
        }
    })
} 

httpMethods.listen = function (){
    this.server.listen(3000, ()=>{
        console.log("Listening to 3000")
    })
}

module.exports = httpMethods