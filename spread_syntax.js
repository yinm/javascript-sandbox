// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const array = ['Pen', 'Pineapple', 'apple']
const myArray = [...array]

console.log(array === myArray)
console.log(myArray)

myArray[1] = 'ぱいなっぷる'
console.log(myArray)
console.log(array)
