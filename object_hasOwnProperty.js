// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

const o = new Object()

o.prop = 'exists'
console.log(o.hasOwnProperty('prop'))
console.log(o.hasOwnProperty('toString'))
console.log(o.hasOwnProperty('hasOwnProperty'))