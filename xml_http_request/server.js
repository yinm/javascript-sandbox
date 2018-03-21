const http = require('http')
const fs = require('fs')
const server = http.createServer()

server.on('request', (req, res) => {
  fs.readFile(`${__dirname}/example.txt`, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/plain'})
      res.write('Not Found')
      return res.end()
    }

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*'
    })
    res.write(data)
    res.end()
  })
})

server.listen(8888)
console.log('Server running at http://localhost:8888/')
