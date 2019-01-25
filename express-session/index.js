const express = require('express')
const parseurl = require('parseurl')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  if (!req.session.views) {
    req.session.views = {}
  }

  const pathname = parseurl(req).pathname
  req.session.views[pathname] = (req.session.views[pathname] || 0) + 1
  next()
 })

app.get('/foo', (req, res, next) => {
  res.send(`you viewed this page ${req.session.views['/foo']} times`)
})

app.get('/bar', (req, res, next) => {
  res.send(`you viewed this page ${req.session.views['/bar']} times`)
})

app.listen(3000)
