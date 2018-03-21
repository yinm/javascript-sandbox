const http = require('http')
const settings = require('./settings')

console.log(settings)

const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('hello Node.js!!!!!!!!!!!!')
  res.end()
})

server.listen(settings.port, settings.host)