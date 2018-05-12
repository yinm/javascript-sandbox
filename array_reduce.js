// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
const maxCallback2 = (max, cur) => Math.max(max, cur)

console.log([{x: 22}, {x: 42}].reduce(maxCallback))
console.log([{x: 22}].reduce(maxCallback))
// console.log([].reduce(maxCallback))

let mapped = [{x: 22}, {x: 42}].map(el => el.x)
console.log(mapped)
console.log(mapped.reduce(maxCallback2, -Infinity))
