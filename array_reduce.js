// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const result = [0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator)
  console.log(currentValue)
  console.log(currentIndex)
  console.log(array)
  console.log('------------------------')

  return accumulator + currentValue
})

console.log(result)