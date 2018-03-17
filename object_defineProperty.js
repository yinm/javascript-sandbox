// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

let o = {}
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
})

Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
})

Object.defineProperty(o, 'c', {
  value: 3
})

o.d = 4

for (let i in o) {
  console.log(i)
}

console.log(Object.keys(o))

console.log(o.propertyIsEnumerable('a'))
console.log(o.propertyIsEnumerable('b'))
console.log(o.propertyIsEnumerable('c'))