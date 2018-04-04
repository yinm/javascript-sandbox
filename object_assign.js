// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const
  v1 = 'abc',
  v2 = true,
  v3 = 10,
  v4 = Symbol('foo')

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4)
console.log(obj)
