// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('Error occurred')
        resolve('No error')
      } catch (err) {
        reject(err)
      }
    }, 1000)
  })
}

async function errorHandling() {
  try {
    return await throwError()
  } catch (err) {
    throw err
  }
}

errorHandling().catch(err => console.log(err))
