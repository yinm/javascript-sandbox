// http://www.task-notes.com/entry/20160719/1468858991

const parsedJson = JSON.parse('{"one": 1, "two": 2, "three": true}', (key, value) => {
  console.log(key)
  if (key === '') return value
  if (Number.isFinite(value)) {
    return String(value * 2)
  } else {
    return undefined  // return only integer
  }
})

console.log(parsedJson)
