// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

const sampleModule = {
  x: 42,
  getX: function() {
    return this.x
  }
}

const retrieveX = sampleModule.getX
console.log(retrieveX()) // The function gets invoked at the global scope

const boundGetX = retrieveX.bind(sampleModule)
console.log(boundGetX())