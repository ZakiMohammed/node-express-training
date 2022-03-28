const path = require('path')

const pathOs = path.join(__dirname, 'os-example.js')

console.log(pathOs)

const parsed = path.parse(__filename)

console.log(parsed)