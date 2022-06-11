const http = require('http')

const httpMethods = {}
let get = {}
let post = {}

httpMethods.get = function(route, callback){
    get[route] = {route , callback}
    this.server = http.createServer();
    this.server.on('request' , function (req, res){
        if(req.url === '/favicon.ico'){
            return res.end()
        }else if(get[req.url]){
            let requestCallback = get[req.url]
            let invoke = requestCallback['callback']
            return invoke(req, res)
        }
        else{
            return res.end("Page Doesn't Exist")
        }
    })
} 

httpMethods.post = function(route, callback){
    post[route] = {route , callback}
    this.server = http.createServer();
    this.server.on('request' , function (req, res){
        if(req.url === '/favicon.ico'){
            return res.end()
        }else if(post[req.url]){
            let requestCallback = post[req.url]
            let invoke = requestCallback['callback']
            return invoke(req, res)
        }
        else{
            return res.end("Page Doesn't Exist")
        }
    })
} 

httpMethods.listen = function (port){
    this.server.listen(port, ()=>{
        console.log("Listening to 3000")
    })
}

module.exports = httpMethods