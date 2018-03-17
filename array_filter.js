// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function isBigEnough(element, index, array) {
  return (element >= 10)
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filtered)