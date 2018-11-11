// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  method(){ alert('!') },
  "my method"(){ alert('!') },
  0(){ alert('!') },
  [!true](){ alert('!') }
}

console.log(obj)
