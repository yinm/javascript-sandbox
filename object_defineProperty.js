// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

const object1 = {}

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
})

object1.property1 = 77

console.log(object1.property1)