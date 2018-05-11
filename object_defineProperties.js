// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

const object1 = {}

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
})

console.log(object1)
console.log(object1.property1)
console.log(object1.property2)
