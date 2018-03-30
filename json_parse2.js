// http://www.task-notes.com/entry/20160719/1468858991

const parsedJson = JSON.parse('[1, 2, true]', (i, value) => {
  console.log(`${i}:${value}`)

  if (Number.isFinite(value)) {
    return String(value)
  } else {
    return value
  }
})

console.log(parsedJson)
