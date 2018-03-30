// http://www.task-notes.com/entry/20160719/1468858991

const json = JSON.stringify({"one": 1, "two": 2, "three": true}, (key, value) => {
  console.log(key)
  console.log(value)

  if (key === '') return value

  if (Number.isFinite(value)) {
    return String(value * 2)
  } else {
    return undefined
  }
})

console.log(json)