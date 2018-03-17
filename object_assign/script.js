// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let v1 = 'abc'
let v2 = true
let v3 = 10
let v4 = Symbol('foo')

let obj = Object.assign({}, v1, null, v2, undefined, v3, v4)
console.log(obj)