// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

// 2nd
function sampleResolve(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

async function sample() {
  const array = [5, 10, 20]
  const sum = await array.reduce(async (sum, value) => {
    return await sum + await sampleResolve(value) * 2
  }, 0)

  return sum;
}

sample().then(v => console.log(v))