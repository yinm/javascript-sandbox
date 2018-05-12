// https://qiita.com/migi/items/3417c2de685c368faab1

let a, b
a = {x: 0, y: 0}
console.log(a)

b = JSON.stringify(a)
console.log(b)

b = JSON.parse(b)
console.log(b)

b.x = 5
console.log(b)
console.log(a)
