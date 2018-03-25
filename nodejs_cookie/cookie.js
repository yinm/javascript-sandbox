// http://kontany.net/blog/?p=183
const
  http = require('http'),
  fs = require('fs'),
  ejs = require('ejs'),
  url = require('url')

const index1 = fs.readFileSync('./index1.ejs', 'utf8')

const server = http.createServer()
server.on('request', doRequest)
server.listen(9999)

function doRequest(req, res) {
  const path = url.parse(req.url)

  switch (path.pathname) {
    case '/':
      const cookie = req.headers.cookie
      const view = ejs.render(index1, {
        title: 'Cookie Sample Page',
        msg: `Cookie: ${cookie}`
      })
      res.setHeader('Content-Type', 'text/html')
      res.write(view)
      res.end()
      break

    case '/favicon.ico':
      break

    default:
      res.setHeader('Content-Type', 'text/plain')

      res.setHeader('Set-Cookie', [`lastURL=${path.pathname}`])
      res.write('Set Cookie!!1')
      res.end()
      break
  }
}

console.log('Server is running...')