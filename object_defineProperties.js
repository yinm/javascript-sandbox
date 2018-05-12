// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop)
    }

    function isCallable(v) {
      return typeof v === 'function'
    }

    if (typeof desc !== 'object' || desc === null) {
      throw new TypeError('bad desc')
    }

    let d = {}

    if (hasProperty(desc, 'enumerable')) {
      d.enumerable = !!desc.enumerable
    }
    if (hasProperty(desc, 'configurable')) {
      d.configurable = !!desc.configurable
    }
    if (hasProperty(desc, 'value')) {
      d.value = desc.value
    }
    if (hasProperty(desc, 'writable')) {
      d.writable = !!desc.writable
    }

    if (hasProperty(desc, 'get')) {
      const g = desc.get

      if (!isCallable(g) && typeof g !== 'undefined') {
        throw new TypeError('bad get')
      }
      d.get = g
    }

    if (hasProperty(desc, 'set')) {
      const s = desc.set

      if (!isCallable(s) && typeof s !== 'undefined') {
        throw new TypeError('bad set')
      }
      d.set = s
    }

    if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
      throw new TypeError('identity-confused descriptor')
    }

    return d
  }

  if (typeof obj !== 'object' || obj === null) {
    throw new TypeError('bad obj')
  }

  properties = Object(properties)
  const keys = Object.keys(properties)
  let descs = []

  for (let i = 0; i < keys.length; i++) {
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])])
  }

  for (let i = 0; i < descs.length; i++) {
    Object.defineProperty(obj, descs[i][0], descs[i][1])
  }

  return obj
}

const object1 = {};

defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(object1.property1);
