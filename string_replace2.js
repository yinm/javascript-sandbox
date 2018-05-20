// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace

const re = /apples/gi
const str = 'Apples are round, and apples are juicy'
const newStr = str.replace(re, 'oranges')
console.log(newStr)