//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

console.log(myFish);
console.log(removed);
