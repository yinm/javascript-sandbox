function add(a, b) {
  return a + b
}

function showResult(a, b) {
  console.log( add(a, b) )
}

module.exports.showResult = showResult
