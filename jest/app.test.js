async function fetchData(isRejected) {
  if (isRejected) {
    throw new Error('error')
  }

  return 'peanut butter'
}

test('the data is peanut butter', async () => {
  expect.assertions(1)
  await expect(fetchData(false)).resolves.toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  expect.assertions(1)
  await expect(fetchData(true)).rejects.toThrow('error')
})