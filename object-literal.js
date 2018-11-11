// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  get prop() { return Math.random() },
  get "my prop"() { return Math.random() },
  get 0(){ return Math.random() },
  get [!true]() { return Math.random() }
}

console.log(obj.prop)
console.log(obj['my prop'])
console.log(obj[0])
console.log(obj.false)
