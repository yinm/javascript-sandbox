// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

let fruits = [
  {'banana': 100},
  {'cherry': 200},
]
let myFruits = [...fruits]
console.log(myFruits)

fruits[0].banana = 300
console.log(fruits)
console.log(myFruits)