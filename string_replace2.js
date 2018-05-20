// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace

function replacer(match, p1, p2, p3, offset, string) {
  console.log(match)
  console.log(offset)
  console.log(string)

  return [p1, p2, p3].join(' - ')
}

const newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer)
console.log(newString)
