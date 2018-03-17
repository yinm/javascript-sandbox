// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp */) {
    'use strict'

    if (this === null) throw new TypeError()

    let
      t = Object(this),
      len = t.length >>> 0

    if (typeof fun !== 'function') throw new TypeError()

    let
      res = [],
      thisp = arguments[1]

    for (let i = 0; i < len; i++) {
      if (i in t) {
        let val = t[i]
        if (fun.call(thisp, val, i, t)) res.push(val)
      }
    }

    return res
  }
}