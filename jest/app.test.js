function fetchData(isRejected) {
  return new Promise((resolve, reject) => {
    if (isRejected) {
      reject('error')
    }

    resolve('peanut butter')
  })
}

test('the fetch fails with an error', () => {
  expect.assertions(1)
  return expect(fetchData(true)).rejects.toMatch('error')
})