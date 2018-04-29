// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor

let o, d

o = { get foo() {return 17} }
d = Object.getOwnPropertyDescriptor(o, 'foo')
console.log(d)

o = {bar: 42}
d = Object.getOwnPropertyDescriptor(o, 'bar')
console.log(d)

o = {}
Object.defineProperty(o, 'baz', { value: 8675309, writable: false, enumerable: false })
d = Object.getOwnPropertyDescriptor(o, 'baz')
console.log(d)