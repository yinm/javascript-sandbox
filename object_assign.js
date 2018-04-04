// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const obj = Object.create({ foo: 1 }, {
  bar: {
    value: 2
  },
  baz: {
    value: 3,
    enumerable: true
  },
})

console.log(obj)
console.log(obj.foo)
console.log(obj.bar)

const copy = Object.assign({}, obj)
console.log(copy)