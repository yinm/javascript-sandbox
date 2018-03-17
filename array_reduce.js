// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

console.log(
  [0,1,2,3,4].reduce((previousValue, currentValue, index, array) => {
    return previousValue + currentValue
  }, 10)
)
