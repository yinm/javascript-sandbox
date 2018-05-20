//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
const removed = myFish.splice(2, 1, 'trumpet')

console.log(myFish)
console.log(removed)