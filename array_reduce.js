// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const array1 = [1, 2, 3, 4]
const reducer = (accumulator, currentValue) => accumulator + currentValue

console.log(array1.reduce(reducer))
console.log(array1.reduce(reducer, 5))