// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' },
]

let invalidEntries = 0

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj)
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true
  }
  invalidEntries++
  return false
}

const arrByID = arr.filter(filterByID)
console.log('Filtered Array\n', arrByID)
console.log('Number of Invalid Entries = ', invalidEntries)