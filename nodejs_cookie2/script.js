// https://github.com/jshttp/cookie
const
  cookie = require('cookie'),
  escapeHtml = require('escape-html'),
  http = require('http'),
  url = require('url')

function onRequest(req, res) {
  // Parse the query string
  const query = url.parse(req.url, true, true).query

  if (query && query.name) {
    // Set a new cookie with the name
    res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7  // 1 week
    }))

    // Redirect back after setting cookie
    res.statusCode = 302
    res.setHeader('Location', req.headers.referer || '/')
    res.end()
    return
  }

  // Parse the cookies on the request
  const cookies = cookie.parse(req.headers.cookie || '')

  // Get the visitor name set in the cookie
  const name = cookies.name

  res.setHeader('Content-Type', 'text/html; charset=UTF-8')

  if (name) {
    res.write('<p>Welcome back, <b>' + escapeHtml(name) + '</b>!</p>')
  } else {
    res.write('<p>Hello, new visitor!</p>')
  }

  res.write('<form method="GET">')
  res.write('<input placeholder="enter your name" name="name"> <input type="submit" value="Set Name">')
  res.end('</form>')
}

http.createServer(onRequest).listen(3000)
console.log('Server is running...')