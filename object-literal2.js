// ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer

var o = {}

var o1 = { a: 'foo', b: 42, c: {} }

var a = 'foo', b = 42, c = {}
var o2 = { a: a, b: b, c: c }

var o3 = {
  property: function ([parameters]) {},
  get property() {},
  set property(value) {},
}

console.log(o)
console.log(o1)
console.log(o2)
console.log(o3)
