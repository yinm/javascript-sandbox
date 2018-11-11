// ref: https://qiita.com/kura07/items/356bd37733f457d3177f

const obj = {
  0: 'value',
  1e2: 'value',
  1e+3: 'value',
  1e-3: 'value',
  1.23: 'value',
  .456: 'value',
  789.: 'value',
  0xff: 'value',
  0o77: 'value',
  0b11: 'value',
  0123: 'value'
}

console.log(obj)

for (let i in obj) console.log(i, typeof i)
