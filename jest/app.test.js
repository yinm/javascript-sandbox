function fetchData(isRejected) {
  return new Promise((resolve, reject) => {
    if (isRejected) {
      reject('error')
    }

    resolve('peanut butter')
  })
}

test('the data is peanut butter', () => {
  expect.assertions(1)
  return expect(fetchData()).resolves.toBe('peanut butter')
})