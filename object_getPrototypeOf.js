// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf

const prototype1 = {}
const object1 = Object.create(prototype1)

console.log(Object.getPrototypeOf(object1) === prototype1)