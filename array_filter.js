// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange',]

function filterItems(query, items) {
  return items.filter((el) => {
    return el.toLocaleString().indexOf(query.toLowerCase()) > -1
  })
}

console.log(filterItems('ap', fruits))
console.log(filterItems('an', fruits))
