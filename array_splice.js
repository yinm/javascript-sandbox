//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let myFish = ['angel', 'clown', 'trumpet', 'strugeon']
const removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')

console.log(myFish)
console.log(removed)