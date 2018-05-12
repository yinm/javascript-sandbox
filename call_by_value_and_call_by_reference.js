// https://qiita.com/migi/items/3417c2de685c368faab1

let a, b
a = {hoge: 'hogehoge', fuga: 'fugafuga'}
b = a
// b = {}
b = new Object()
console.log(b)
console.log(a)