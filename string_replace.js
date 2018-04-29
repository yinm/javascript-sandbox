// https://qiita.com/hrdaya/items/291276a5a20971592216

function snake2camel(str, upper) {
  str = str
    .replace(/^[\-_ ]/g, '')
    .replace(/[\-_ ]./g, (match) => {
      return match.charAt(1).toUpperCase()
    })

  return upper === true
    ? str.replace(/^[a-z]/, (match) => {
        return match.toUpperCase()
      })
    : str
}

console.log(snake2camel('abc-def', false))
console.log(snake2camel('abc-def', true))
console.log(snake2camel('abc_def', false))
console.log(snake2camel('abc_def', true))
console.log(snake2camel('abc def', false))
console.log(snake2camel('abc def', true))
