// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const word = 'JavaScriptプログラミング';

[...word].forEach(c => console.log(c))

console.log('---------------------------超えられない壁')

for (let c of [...word]) {
  console.log(c)
}

console.log('---------------------------超えられない壁')

for (let i in [...word]) {
  console.log(i)
}

console.log('---------------------------超えられない壁')

const reversed = [...word].reduceRight((accumulator, currentValue, index) => {
  console.log(index, '---------------------')
  console.log('accumulator', accumulator)
  console.log('currentValue', currentValue)
  return accumulator + currentValue
})
console.log(reversed)
