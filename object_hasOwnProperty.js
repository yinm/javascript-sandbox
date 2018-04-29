// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty

const o = new Object()
o.prop = 'exitsts'

console.log(o.hasOwnProperty('prop'))

function changePropName(obj, propNameStr, newPropNameStr) {
  o[newPropNameStr] = o[propNameStr]
  delete o[propNameStr]
}

changePropName(o, 'prop', 'newProp')
console.log(o.hasOwnProperty('prop'))
console.log(o.hasOwnProperty('newProp'))