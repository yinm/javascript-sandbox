console.log(module.exports === exports)

exports.foo = 'foo'
console.log(module.exports === exports)

exports = 'bar'
console.log(module.exports === exports)
