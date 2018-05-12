class FakeStorage {
  constructor() {}

  get length() {
    return this.keys().length
  }

  getItem(key) {
    return this[key]
  }

  setItem(key, data) {
    this[key] = data
  }

  removeItem(key) {
    delete this[key]
  }

  key(index) {
    return this.keys()[index] || null
  }

  clear() {
    this.keys().forEach((key) => {
      this.removeItem(key)
    })
  }

  keys() {
    return Object.keys(this)
  }
}

function useFakeLocalStorage() {
  let originalLocalStoragePropertyDescriptor = Object.getOwnPropertyDescriptor(
    window, 'localStorage'
  ) || { value: undefined, enumerable: true, configurable: true }

  let fakeLocalStorage = new FakeStorage()
  Object.defineProperty(window, 'localStorage', {
    value: fakeLocalStorage,
    enumerable: true,
    configurable: true,
  })

  return {
    restore() {
      Object.defineProperty(window, 'localStorage', originalLocalStoragePropertyDescriptor)
    }
  }
}

export { FakeStorage, useFakeLocalStorage }