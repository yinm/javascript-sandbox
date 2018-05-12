// https://qiita.com/migi/items/3417c2de685c368faab1

let a, b
a = 0
b = a
b.hoge = 'hoge'

console.log(a.hoge)
console.log(b.hoge)

let c
c = 0
c.hoge = 'hoge'
console.log(c.hoge)