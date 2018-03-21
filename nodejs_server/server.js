const http = require('http')
const url = require('url')
const fs = require('fs')
const server = http.createServer()

server.on('request', (req, res) => {
  const response = {
    'renderHTML': function () {
      fs.readFile(`${__dirname}/template/index.html`, 'utf-8', (err, data) => {
        res.writeHead(200, {
          'content-Type': 'text/html'
        })

        res.write(data)
        res.end('HTML file has already sent to browser')
      })
    },

    'resultGenerator': function () {
      fs.readFile(`${__dirname}/template/result.html`, 'utf-8', (err, data) => {
        res.writeHead(200, {
          'content-Type': 'text/html'
        })

        res.write(data)
        res.end('HTML file has already sent to browser')
      })
    },

    'notFound': function() {
      fs.readFile(`${__dirname}/template/notfound.html`, 'utf-8', (err, data) => {
        res.writeHead(404, {
          'content-Type': 'text/html'
        })

        res.write(data)
        res.end('HTML file has already sent to browser')
      })
    },
  }

  const uri = url.parse(req.url).pathname

  if (uri === '/') {
    response.renderHTML()
  } else if (uri === '/result') {
    response.resultGenerator()
  } else {
    response.notFound()
  }
})


server.listen(8080)
console.log('Server running at http://localhost:8080/')
