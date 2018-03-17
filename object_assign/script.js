// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let obj = Object.create({ foo: 1 }, {
  bar: {
    value: 2,
  },
  baz: {
    value: 3,
    enumerable: true,
  }
})

const copy = Object.assign({}, obj)
console.log(copy)