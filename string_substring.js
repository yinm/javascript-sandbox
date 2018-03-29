// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/substring
const anyString = 'Mozilla'

// render "Moz"
console.log(anyString.substring(0, 3))
console.log(anyString.substring(3, 0))

// render "lla"
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// render "Mozill"
console.log(anyString.substring(0, 6))

// render "Mozilla"
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))