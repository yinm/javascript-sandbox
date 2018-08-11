module.exports = function(title) {
  this.title = title

  this.sayTitle = function() {
    say(this.title)
  }
}

function say(word) {
  console.log(word)
}
