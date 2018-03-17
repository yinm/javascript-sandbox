// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

let target = Object.defineProperty({}, 'foo', {
  value: 1,
  writable: false,
})

Object.assign(target, {bar: 2}, {foo2: 3, foo3: 3}, {baz: 4})

console.log(target.bar)
console.log(target.foo2)
console.log(target.foo)
console.log(target.foo3)
console.log(target.baz)