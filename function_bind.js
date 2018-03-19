// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 12) + 1
}

LateBloomer.prototype.bloom = function() {
  setTimeout(this.declare.bind(this), 1000)
}

LateBloomer.prototype.declare = function() {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`)
}

const flower = new LateBloomer()
flower.bloom()