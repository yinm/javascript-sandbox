// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2)
    }, 1000)
  })
}

function sample() {
  let result = 0

  return sampleResolve(5)
    .then(value => {
      result += value
      return sampleResolve(10)
    })
    .then(value => {
      result += value
      return sampleResolve(20)
    })
    .then(value => {
      result += value
      return result
    })
}

sample().then(v => {
  console.log(v)
})
