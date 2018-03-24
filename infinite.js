// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/isFinite

console.log(isFinite(Infinity))
console.log(isFinite(NaN))
console.log(isFinite(-Infinity))

console.log(isFinite(0))
console.log(isFinite(2e64))
console.log(isFinite(null))

console.log("0")
console.log(Number.isFinite("0"))
