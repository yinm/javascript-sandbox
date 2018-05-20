// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const items = ['item1', 'item2', 'item3']
const copy = []

items.forEach((item) => {
  copy.push(item)
})

console.log(copy)