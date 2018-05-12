// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, currentValue) => {
    console.log(accumulator)
    console.log(currentValue)

    let result = accumulator.concat(currentValue)
    console.log(result)
    console.log('-----------------')

    return result
  },
  []
)
console.log(flattened)