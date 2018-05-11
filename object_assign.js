// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const object1 = {
  a: 1,
  b: 2,
  c: 3,
}

const object2 = Object.assign({c: 4, d: 5,}, object1)

console.log(object1)
console.log(object2)