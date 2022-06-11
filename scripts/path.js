const p = require('path')

const path = {}

path.separator = p.sep
path.filePath = p.join(__dirname,'..','content','text.txt')
path.base = p.basename(path.filePath)
path.absolute = p.resolve(__dirname,'content','text.txt')

module.exports = path