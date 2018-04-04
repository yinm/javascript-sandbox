// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange',]

const filterItems = (query, items) => {
  return items.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  )
}

console.log(filterItems('ap', fruits))
console.log(filterItems('an', fruits))
