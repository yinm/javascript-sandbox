// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

function list() {
  return Array.prototype.slice.call(arguments)
}

const list1 = list(1, 2, 3)

const leadingThirtysevenList = list.bind(undefined, 37)

const list2 = leadingThirtysevenList()
const list3 = leadingThirtysevenList(1, 2, 3)

console.log(list1)
console.log(list2)
console.log(list3)
