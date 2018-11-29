const counter = require('./counter')

console.log(counter.counter)
counter.increment()
console.log(counter.counter)

counter.counter++
console.log(counter.counter)
