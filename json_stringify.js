console.log(JSON.stringify({}))
console.log(JSON.stringify(true))
console.log(JSON.stringify('foo'))
console.log(JSON.stringify([1, 'false', false]))
console.log(JSON.stringify({x: 5}))
console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)))

console.log(JSON.stringify({x: undefined, y: Object, z: Symbol('')}))
console.log(JSON.stringify({[Symbol('foo')]: 'foo'}))
console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, [Symbol.for('foo')]))
console.log(JSON.stringify({[Symbol.for('foo')]: 'foo'}, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol'
  }
}))

console.log(JSON.stringify(Object.create(null, { x: {value: 'x', enumerable: false}, y: {value: 'y', enumerable: true} })))