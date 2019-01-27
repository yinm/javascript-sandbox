const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.method, req.url)

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(`
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="text" name="message" value="Hello" /><br />
        <input type="file" name="file" /><br />
        <input type="submit" value="submit" />
      </form>
    `)

  } else if (req.url === '/upload' && req.method === 'POST') {
    console.log('content-type: ', req.headers['content-type'])

    let body = []
    req.on('data', chunk => {
      body.push(chunk)
    }).on('end', () => {
      body = Buffer.concat(body).toString()
      console.log('body======\n' + body)

      res.writeHead(200, { 'content-type': 'text/html' })
      res.end('thank you')
    })

  } else {
    res.writeHead(404)
    res.end('NOT FOUND')
  }
})

server.listen(8080)
console.log('Server is running on 8080')
