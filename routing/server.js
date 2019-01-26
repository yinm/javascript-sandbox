const http = require('http')
const fs = require('fs')
const path = require('path')

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript'
}

http.createServer((req, res) => {
  const decodedUrl = decodeURI(req.url);
  const filename = __dirname + decodedUrl

  fs.exists(filename, exists => {
    if (!exists) {
      res.writeHead(404)
      res.end('Not found')
      return
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(500)
        res.end('Server Error')
        return
      }

      const headers = { 'Content-Type': mimeTypes[path.extname(filename)] }
      res.writeHead(200, headers)
      res.end(data)
    })
  })
}).listen(3000, () => console.log('listening on 3000'))
