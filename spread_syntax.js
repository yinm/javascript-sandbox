// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

let data1 = [1, 2, 3]
let data1a = [1, 2, 3]
let data2 = ['d', 'e', 'f']

Array.prototype.push.apply(data1, data2)
console.log(data1)

console.log([].push.apply(data1a, data2))
console.log(data1a)