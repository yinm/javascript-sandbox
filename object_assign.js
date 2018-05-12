// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

Object.defineProperty(Object, 'assignPolyfill', {
  value: function assign(target, varArgs) {
    'use strict'

    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object')
    }

    let to = Object(target)

    for (let index = 1; index < arguments.length; index++) {
      let nextSource = arguments[index]

      if (nextSource != null) {
        for (let nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey]
          }
        }
      }
    }

    return to
  },
  writable: true,
  configurable: true,
})

const object1 = {
  a: 1,
  b: 2,
  c: 3,
}

const object2 = Object.assignPolyfill({c: 4, d: 5,}, object1)
console.log(object2)
