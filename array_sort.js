// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// the array to be sorted
const list = ['Delta', 'alpha', 'CHARLIE', 'bravo']

// temporary array holds objects with position and sort-value
const mapped = list.map((el, i) => {
  return { index: i, value: el.toLowerCase() }
})
console.log(mapped)

// sorting the mapped array containing the reduced values
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

// container for the resulting order
const result = mapped.map((el) => list[el.index])
console.log(result)
