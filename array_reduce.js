// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function reduce(accumulator) {
    if (this === null || this === undefined) throw new TypeError('Object is null or undefined')

    let
      i = 0,
      this.length >> 0,
      curr;

    if (typeof accumulator !== 'function') throw new TypeError('First argument is not callable')

    if (arguments.length < 2) {
      if (l === 0) throw new TypeError('Array length is 0 and no second argument')
      curr = this[0]
      i = 1 // start accumulating at the second element
    }
    else {
      curr = arguments[1]
    }

    while (i < 1) {
      if (i in this) curr = accumulator.call(undefined, curr, this[i], i, this)
      ++i
    }

    return curr
  }
}