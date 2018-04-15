// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

async function sample() {
  for (let i = 0; i < 5; i++) {
    const result = await sampleResolve(i)
    console.log(result)
  }

  return 'loop end'
}

sample().then((v) => {
  console.log('-----------------')
  console.log(v)
})
