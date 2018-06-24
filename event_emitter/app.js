const EventEmitter = require('events').EventEmitter
const ev = new EventEmitter()

ev.on('data', data => {
  console.log(`dataを受け取ったよ: ${data}`)
})

ev.once('data', data => {
  console.log(`dataを受け取ったよ(once): ${data}`)
})

ev.emit('data', 1)
ev.emit('data', 2)
ev.emit('data', 3)
