const value = '値'
const foo = 'foo'
console.log(module.exports === exports)

module.exports = {
  fuga: 'fuga'
}
console.log(module.exports === exports)

exports.value = value
console.log(module.exports === exports)
