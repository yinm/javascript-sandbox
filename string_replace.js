// https://qiita.com/hrdaya/items/291276a5a20971592216

function camel2snake(str, separator) {
  separator = separator === void 0 ? '-' : separator

  return str
    .replace(/^[A-Z]+$/, (match) => {
      return match.toLowerCase()
    })
    .replace(/^[A-Z]+/, (match) => {
      if (match.length > 1) {
        return match.replace(/[A-Z]$/, (m) => {
          return separator + m.toLowerCase()
        }).toLowerCase()
      } else {
        return match.toLowerCase()
      }
    })
    .replace(/[A-Z]+$/g, (match) => {
      return separator + match.toLowerCase()
    })
    .replace(/[A-Z]/g, (match) => {
      return separator + match.toLowerCase()
    })
}

console.log(camel2snake('abcDefGh'))
console.log(camel2snake('abcDefGh', '_'))
console.log(camel2snake('AbcDefGh'))
console.log(camel2snake('AbcDefGh', '_'))
