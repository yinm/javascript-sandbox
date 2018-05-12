// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const data = ['a', 'b', 'c', 'a', 'b', 'd']
const dist = [...(new Set(data))]

console.log(dist)