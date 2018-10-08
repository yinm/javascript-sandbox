// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const data1 = [1, 2, 3]
const data2 = ['d', 'e', 'f']

data1.push(...data2)
console.log(data1)

const data3 = ['g']

data2.push(...data3)
console.log(data2)
console.log(data1)
