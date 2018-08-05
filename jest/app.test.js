function ConfigError(message) {
  this.message = message
  const lastPart = new Error().stack.match(/[^\s]+$/)
  this.stack = `${this.name} at ${lastPart}`
}
Object.setPrototypeOf(ConfigError, Error)
ConfigError.prototype = Object.create(Error.prototype)
ConfigError.prototype.name = 'ConfigError'
ConfigError.prototype.message = ''
ConfigError.prototype.constructor = ConfigError

function compileAndroidCode() {
  throw new ConfigError('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(ConfigError)

  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})