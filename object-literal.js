// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  method() { console.log('!') },
  'my method'() { console.log('!') },
  0() { console.log('!') },
  [!true]() { console.log('!') }
}

obj.method()
obj['my method']()
obj['0']()
obj.false()
