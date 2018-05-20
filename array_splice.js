//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
const removed = myFish.splice(myFish.length - 3, 2)

console.log(myFish)
console.log(removed)