// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
  console.log(word)
  if (word === 'two') {
    words.shift()
  }
})

console.log(words)