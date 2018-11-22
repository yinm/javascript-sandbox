// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  set prop(v) { console.log(v) },
  set 'my prop'(v) { console.log(v) },
  set 0(v) { console.log(v) },
  set [!true](v) { console.log(v) }
}

obj.prop = '!'
obj['my prop'] = '!'
obj['0'] = '!'
obj.false = '!'
