// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

// 2nd
const prop = 0
const obj = { prop }

with({ prop: 1 }) {
  const anotherObj = { prop }
  console.log(anotherObj)
}

console.log(obj)
