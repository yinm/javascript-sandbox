// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const re = /(\w+)\s(\w+)/
const str = 'John Smith'
const newstr = str.replace(re, '$2, $1')
console.log(newstr)