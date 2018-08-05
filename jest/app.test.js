function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index])
  }
}

const mockCallback = jest.fn()
forEach([0, 1], mockCallback)

expect(mockCallback.mock.calls.length).toBe(2)
expect(mockCallback.mock.calls[0][0]).toBe(0)
expect(mockCallback.mock.calls[1][0]).toBe(1)
