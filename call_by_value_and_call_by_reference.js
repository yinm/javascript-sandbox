// https://qiita.com/migi/items/3417c2de685c368faab1

let a, b
a = [0, 1, 2]
b = []

for (let i = 0, l = a.length; i < l; i++) {
  b.push(a[i])
}
console.log(b)

b[0] = 5
console.log(b)
console.log(a)