//ref: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
var myFish = ['angel', 'clown', 'mandarin', 'strugeon'];
var removed= myFish.splice(2, 0, 'drum');
console.log(myFish);
console.log(removed);