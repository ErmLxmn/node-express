const name = require('./scripts/names')
const say = require('./scripts/say')
const info = require('./scripts/os')
const path = require('path')
const fs = require('./scripts/filesystem')
const http = require('./scripts/http')
const lodash = require('./scripts/lodash')
const {readFileSync} = require('fs')

http.get('/', function(req, res){
    res.end(pagePath('index'))
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

function pagePath(route){
    let page = path.join('html',route + '.html')
    return readFileSync(page, 'utf8')
}

http.listen(3000)


