// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

const
  stringArray = ['Blue', 'Humpback', 'Beluga'],
  numericStringArray = ['80', '9', '700'],
  numberArray = [40, 1, 5, 200],
  mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200]

function compareNumbers(a, b) {
  return a - b
}

console.log('stringArray:', stringArray.join())
console.log('ソート結果:', stringArray.sort())

console.log('numberArray:', numberArray.join())
console.log('比較関数なしのソート結果', numberArray.sort())
console.log('compareNumbers:', numberArray.sort(compareNumbers))

console.log('numericStringArray:', numericStringArray.join())
console.log('比較関数なしのソート結果', numericStringArray.sort())
console.log('compareNumbers:', numericStringArray.sort(compareNumbers))

console.log('mixedNumericArray:', mixedNumericArray.join())
console.log('比較関数なしのソート結果:', mixedNumericArray.sort())
console.log('compareNumbers:', mixedNumericArray.sort(compareNumbers))