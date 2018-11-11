// ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer

const a = 'foo', b = 42, c = {}
const o1 = {a, b, c}

const o2 = {
  property([parameters]) {}
}

const prop = 'foo'
const o3 = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there'
}

console.log(o1)
console.log(o2)
console.log(o3)
