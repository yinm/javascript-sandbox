// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  ['pr' + 'op']: 42,
  [1 + 2]: 42,
  [!true]: 42,
  [{}]: 42,
  [function(){ return 'foo' }()]: 42,
  [Symbol()]: 42
}

console.log(obj)
