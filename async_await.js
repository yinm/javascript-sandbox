// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 500)
  })
}

async function sample() {
  const array = [5, 10, 20]
  const promiseAll = await Promise.all(array.map(async value => {
    return await sampleResolve(value) * 2
  }))

  return promiseAll
}

sample().then(([a, b, c]) => {
  console.log(a, b, c)
})
