let int = 0

function increment() {
  int++
}

function get() {
  return int
}

module.exports.increment = increment
module.exports.get = get
