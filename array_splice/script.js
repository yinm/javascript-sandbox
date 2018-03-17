//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

console.log(myFish);
console.log(removed);
