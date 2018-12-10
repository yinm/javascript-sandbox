// https://qiita.com/ledsun/items/953b25b60592c22811ca

const obj = {
  a: 'alpha',
  b: 'bravo'
}

Object.keys(obj).forEach(key => console.log(obj[key]))

for(let key of Object.keys(obj)) {
  console.log(obj[key])
}

for(let val of Object.values(obj)) {
  console.log(val)
}

for(let [key, val] of Object.entries(obj)) {
  console.log(key, val)
}
