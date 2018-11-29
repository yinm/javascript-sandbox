let globalVariable = {};

(function (globalVariable) {
  const privateFunction = () => {
    console.log('shhhh, this is private!')
  }

  globalVariable.each = (collection, iterator) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection)
      }
    } else {
      for (let key in collection) {
        iterator(collection[key], key, collection)
      }
    }
  }

  globalVariable.filter = (collection, test) => {
    let filtered = []
    globalVariable.each(collection, (item) => {
      if (test(item)) {
        filtered.push(item)
      }
    })

    return filtered
  }

  globalVariable.map = (collection, iterator) => {
    let mapped = []
    globalVariable.each(collection, (value, key, collection) => {
      mapped.push(iterator(value))
    })

    return mapped
  }

  globalVariable.reduce = (collection, iterator, accumulator) => {
    let startingValueMissing = accumulator === undefined

    globalVariable.each(collection, (item) => {
      if (startingValueMissing) {
        accumulator = item
        startingValueMissing = false
      } else {
        accumulator = iterator(accumulator, item)
      }
    })

    return accumulator
  }
})(globalVariable)
