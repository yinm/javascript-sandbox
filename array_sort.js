// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu']
items.sort((a, b) => a.localeCompare(b))
console.log(items)
