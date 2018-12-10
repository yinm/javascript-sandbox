// https://qiita.com/kws9/items/6ce80ae1c0fd28a3a9d7

const obj = {
  "key-1": "value-1",
  "key-2": "value-2",
  "key-3": "value-3"
}

console.log(Object.entries(obj))
console.log(Object.entries(obj).map(([key, value]) => ({ key, value })))
console.log(Object.entries(obj).map(([key, value]) => ({ 'key': key, 'value': value })))
