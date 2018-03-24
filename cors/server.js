const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*'
  })
  res.write('クロスオリジン の ないよう を よみこんだ ！')
  res.end()
})

server.listen(8000)
console.log('Server is running at http://localhost:8000/')