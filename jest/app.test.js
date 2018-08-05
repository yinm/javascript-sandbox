test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Chiristoph', () => {
  expect('Cristoph').toMatch(/stop/)
})