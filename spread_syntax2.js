// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax

const dateFields = [1970, 0, 1]
const d = new Date(...dateFields)
console.log(d)