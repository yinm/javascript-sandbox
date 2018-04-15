// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value * 2)
    }, 2000)
  })
}

async function sample() {
  const result = await sampleResolve(5)
  return result + 5
}

sample().then(result => {
  console.log(result)
})
