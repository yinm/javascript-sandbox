// http://js-next.hatenablog.com/entry/2015/05/07/211859

const sym = Symbol()

let obj1 = {
  "str": 1,
}

let obj2 = {
  "str": 2,
  [sym]: 2,
}

const obj3 = Object.assign(obj1, obj2)

console.log(obj1 === obj3)
console.log(obj1["str"] === 2)
console.log(obj1[sym] === 2)