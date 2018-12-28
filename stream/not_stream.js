const fs = require('fs')

const text = fs.readFileSync('src.txt', 'utf8')
fs.writeFileSync('dest.txt', text)
