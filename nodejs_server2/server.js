const http = require('http')
const settings = require('./settings')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {
  fs.readFile(`${__dirname}/views/index.html`, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('Not Found')
      return res.end()
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
})

console.log(settings)
server.listen(settings.port, settings.host)