const express = require('express');
const app = express();
const data = require('./public/data/data')

app.use(express.static('./public'))

// app.get('/', function (req, res){
//     res.sendFile(__dirname + '/public/index.html')
// })

app.get('/about', function (req, res){
    res.json(data.me)
})

app.get('*', function (req, res){
    res.status(404).send('Page Not Found')
})

app.listen(5000, function (){
    console.log('server listening to port: 5000')
})