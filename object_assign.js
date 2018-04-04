// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let
  o1 = { a: 1 },
  o2 = { [Symbol('foo')]: 2 }

const obj = Object.assign({}, o1, o2)
console.log(obj)
console.log(Object.getOwnPropertySymbols(obj))