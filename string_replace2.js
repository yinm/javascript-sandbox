// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace

function styleHyphenFormat(propertyName) {
  function upperToHyphenLower(match, offset, string) {
    return (offset > 0 ? '-' : '') + match.toLowerCase()
  }
  return propertyName.replace(/[A-Z]/g, upperToHyphenLower)
}

console.log(styleHyphenFormat('borderTop'))
console.log(styleHyphenFormat('ToLowerCase'))