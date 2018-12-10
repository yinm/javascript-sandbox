// https://qiita.com/kws9/items/6ce80ae1c0fd28a3a9d7

const list = [
  {
    "key": "key-1",
    "value": "value-1"
  },
  {
    "key": "key-2",
    "value": "value-2"
  },
  {
    "key": "key-3",
    "value": "value-3"
  }
]

console.log(list.reduce((obj, item) => Object.assign(obj, {[item.key]: item.value}), {}))
console.log(list.reduce((obj, item) => ({ ...obj, [item.key]: item.value }), {}))
