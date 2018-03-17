// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const flattened = [[0, 1], [2, 3], [4, 5]].reduce((a, b) => {
  return a.concat(b)
})
console.log(flattened)