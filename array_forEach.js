// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function copy(obj) {
  const copy = Object.create(Object.getPrototypeOf(obj))
  const propNames = Object.getOwnPropertyNames(obj)

  console.log(copy)
  console.log(propNames)

  propNames.forEach((name) => {
    const desc = Object.getOwnPropertyDescriptor(obj, name)
    console.log('desc', desc)

    Object.defineProperty(copy, name, desc)
    console.log('defineProperty', copy)
  })

  return copy
}

const obj1 = {a: 1, b: 2,}
const obj2 = copy(obj1)

console.log(obj2)