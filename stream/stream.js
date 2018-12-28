const fs = require('fs')

const src = fs.createReadStream('src.txt', 'utf8')
const dest = fs.createWriteStream('dest.txt', 'utf8')
src.pipe(dest)
