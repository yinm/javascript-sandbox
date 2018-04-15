// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

async function resolveSample() {
  return 'resolve!!'
}

resolveSample().then(value => {
  console.log(value)
})

async function rejectSample() {
  throw new Error('reject!!')
}

rejectSample().catch(err => {
  console.log(err)
})

// function resolveError() {
//   return 'resolveError!!'
// }
//
// resolveError().then(value => {
//   console.log(value)
// })