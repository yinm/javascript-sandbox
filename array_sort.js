// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//2nd
const list = ['Delta', 'alpha', 'CHARLIE', 'bravo']

const mapped = list.map((el, i) => {
  return { index: i, value: el.toLowerCase() }
})

mapped.sort((a, b) => {
  if (a.value > b.value) {
    return 1
  }
  if (a.value < b.value) {
    return -1
  }

  return 0
})
console.log(mapped)

const result = mapped.map((el) => list[el.index])
console.log(result)
