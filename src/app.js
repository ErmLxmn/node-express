const name = require('../scripts/names')
const say = require('../scripts/say')
const info = require('../scripts/os')
const path = require('../scripts/path')
const fs = require('../scripts/filesystem')
const http = require('../scripts/http')
const lodash = require('../scripts/lodash')

http.get('/', function(req, res){
    res.end("Welcome to the home page")
})

http.get('/event', function(req, res){
    res.end("Welcome to the event page")
})

http.get('/about', function(req, res){
    res.end("Welcome to the about page")
})

http.get('/profile', function(req, res){
    res.end("Welcome to the profile page")
})


http.listen(3000)


