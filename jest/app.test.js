async function fetchData(isRejected) {
  if (isRejected) {
    throw new Error('error')
  }

  return 'peanut butter'
}

test('the data is peanut butter', async () => {
  expect.assertions(1)
  const data = await fetchData(false)
  expect(data).toBe('peanut butter')
})

test('the fetch fails with an error', async () => {
  expect.assertions(1)

  try {
    await fetchData(true)
  } catch (e) {
    expect(e.message).toMatch('error')
  }
})