// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let
  o1 = {a: 1},
  o2 = {b: 2},
  o3 = {c: 3}

const obj = Object.assign(o1, o2, o3)
console.log(obj)
console.log(o1)
console.log(o2)
console.log(o3)