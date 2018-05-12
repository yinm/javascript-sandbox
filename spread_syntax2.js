// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax

function sum(x, y, z) {
  return x + y + z
}

const numbers = [1, 2, 3]

console.log(sum(...numbers))
console.log(sum.apply(null, numbers))