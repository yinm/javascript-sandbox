// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/get

const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined
    }

    return this.log[this.log.length - 1]
  }
}

console.log(obj.latest)