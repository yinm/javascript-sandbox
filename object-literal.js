// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const d = 42
const obj = {
  a: 42,
  "b": 42,
  0: 42,
  ["c"]: 42,
  d,
  e(){},
  get f(){},
  set g(v){},
  *h(){}
}

console.log(obj)
