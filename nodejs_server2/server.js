const http = require('http')
const settings = require('./settings')

console.log(settings)

const server = http.createServer()

server.on('request', (req, res) => {
  let message

  switch (req.url) {
    case '/about':
      message = 'about this page'
      break
    case '/profile':
      message = 'about me'
      break
    default:
      message = 'wrong page'
      break
  }

  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write(message)
  res.end()
})

server.listen(settings.port, settings.host)