const Movie = function(title) {
  this.title = title
}

Movie.prototype.sayTitle = function() {
  say(this.title)
}

say = function(word) {
  console.log(word)
}

module.exports = Movie
