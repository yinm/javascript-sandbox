function fetchData(isRejected) {
  return new Promise((resolve, reject) => {
    if (isRejected) {
      reject(new Error('error'))
    }

    resolve('peanut butter')
  })
}

test('the data is peanut butter', () => {
  expect.assertions(1)
  return fetchData(false).then(data => {
    expect(data).toBe('peanut butter')
  })
})