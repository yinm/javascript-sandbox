// http://kontany.net/blog/?p=183
const
  http = require('http'),
  fs = require('fs'),
  ejs = require('ejs'),
  url = require('url'),
  cookie = require('cookie')

const index1 = fs.readFileSync('./index1.ejs', 'utf8')

const server = http.createServer()
server.on('request', doRequest)
server.listen(9999)

function doRequest(req, res) {
  const path = url.parse(req.url)

  switch (path.pathname) {
    case '/':
      const parsed_cookie = cookie.parse(req.headers.cookie)

      const view = ejs.render(index1, {
        title: 'Cookie Sample Page',
        msg: `Cookie:${parsed_cookie.lastURL}, ${parsed_cookie.lastTime}`
      })
      res.setHeader('Content-Type', 'text/html')
      res.write(view)
      res.end()
      break

    case '/set_time':
      const date = new Date().toDateString()
      const serializedCookie1 = cookie.serialize(
        'lastTime',
        `アクセス日時:${date}`,
        {
          maxAge: 100
        }
      )

      res.setHeader('Set-Cookie', serializedCookie1)
      res.write('Cookie lastTime set!!1')
      res.end()
      break

    case '/favicon.ico':
      break

    default:
      res.setHeader('Content-Type', 'text/plain')

      const serializedCookie2 = cookie.serialize(
        'lastURL',
        path.pathname,
        {
          maxAge: 100
        }
      )

      res.setHeader('Set-Cookie', serializedCookie2)
      res.write('Set Cookie!!1')
      res.end()
      break
  }
}

console.log('Server is running...')
