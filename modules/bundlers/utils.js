export function each(collection, iterator) {
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

export function filter(collection, test) {
  let filtered = []
  each(collection, (item) => {
    if (test(item)) {
      filtered.push(item)
    }
  })

  return filtered
}

export function map(collection, iterator) {
  let mapped = []
  each(collection, (value, key, collection) => {
    mapped.push(iterator(value))
  })

  return mapped
}

export function reduce(collection, iterator, accumulator) {
  let startingValueMissing = accumulator === undefined

  each(collection, (item) => {
    if(startingValueMissing) {
      accumulator = item
      startingValueMissing = false
    } else {
      accumulator = iterator(accumulator, item)
    }
  })

  return accumulator
}
