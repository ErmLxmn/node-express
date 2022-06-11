const fs = require('fs')
const {readFileSync, writeFileSync} = fs
const path = require('./path')

let fileSystem = {}

fileSystem.readFile = readFileSync(path.filePath,'utf8')
fileSystem.writeFile = function(filename, content){
    writeFileSync(path.filePath,content,'utf8')
    return readFileSync(path.filePath,'utf8')
}

//#flag a - appen writefile

module.exports = fileSystem