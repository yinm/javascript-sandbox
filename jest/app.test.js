const filterTestFn = jest.fn()

filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false)

const result = [11, 12].filter(filterTestFn)

console.log(result)
console.log(filterTestFn.mock.calls)