'use strict';

(async () => {
  console.log('フラ')
  await sleep(1000)
  console.log('イド')
  await sleep(2000)
  console.log('チキーン')
})()

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    } , time)
  })
}
