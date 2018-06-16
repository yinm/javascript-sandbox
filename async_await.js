// https://qiita.com/soarflat/items/1a9613e023200bbebcb3

function throwError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error('エラーがあったよ')
        resolve('エラーはなかった')
      } catch(err) {
        reject(err)
      }
    }, 500)
  })
}

async function errorHandling() {
  try {
    const result = await throwError()
    return result
  } catch (err) {
    throw err
  }
}

errorHandling().catch(err => console.log(err))
