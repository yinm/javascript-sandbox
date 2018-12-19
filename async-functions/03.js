'use strict'

console.log('フラ')
sleep(1000).then(() => {
  console.log('イド')
  return sleep(2000)
}).then(() => {
  console.log('チキーン！')
})

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    } , time)
  })
}
