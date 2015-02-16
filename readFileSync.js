


var fs = require('fs')
var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var str = buf.toString()
result = str.split('\n').length - 1
console.log(result)
