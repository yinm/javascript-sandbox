'use strict'

console.log('フラ')
sleep(1000)
console.log('イド')
sleep(2000)
console.log('チキーン！')

function sleep(time) {
  const d1 = new Date()
  while (true) {
    const d2 = new Date()
    if (d2 - d1 > time) {
      return
    }
  }
}
