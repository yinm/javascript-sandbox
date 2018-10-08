// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const fruits = [
  { 'banana': 100 },
  { 'cherry': 200 }
]
const myFruits = [...fruits]

fruits[0].banana = 300
console.log(myFruits)
