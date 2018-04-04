// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function isBigEnough(value) {
  return value >= 10
}

const filterd = [12, 5, 8, 130, 44].filter(isBigEnough)
console.log(filterd)