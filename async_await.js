// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolve')
    }, 1000)
  })
}

async function sample() {
  const result = await sampleResolve()

  console.log(result)
}
sample()
