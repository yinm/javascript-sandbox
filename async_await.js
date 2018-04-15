// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

async function sample() {
  const array = [5, 10, 15]
  return await Promise.all(array.map(async value => await sampleResolve(value) * 2))
}

sample().then(([a, b, c]) => console.log(a, b, c))
