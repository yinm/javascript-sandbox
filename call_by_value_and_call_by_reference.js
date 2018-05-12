// https://qiita.com/migi/items/3417c2de685c368faab1

let a, b
a = [0, 1, 2]
b = a.concat()
console.log(b)

b[0] = 5
console.log(b)
console.log(a)