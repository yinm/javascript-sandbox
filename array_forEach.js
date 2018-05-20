// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`)
}

[2, 5, , 9,].forEach(logArrayElements)