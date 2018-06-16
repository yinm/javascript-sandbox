// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 500)
  })
}

async function sample() {
  for (let i = 0; i < 5; i += 1) {
    let result = await sampleResolve(i)
    console.log(result)
  }

  return 'ループが終わった'
}

sample().then(v => console.log(v))
