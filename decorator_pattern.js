// https://qiita.com/kenju/items/b81dd8e0ff2e96796bf4

function Macbook() {
  this.cost = function() {
    return 997
  }

  this.screenSize = function() {
    return 11.6
  }
}

function memory(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 75
  }
}

function engraving(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 200
  }
}

function insurance(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 250
  }
}

function graphicCard(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 150
  }
}

function harddiskDrive(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v + 180
  }
}

function academicDiscount(macbook) {
  const v = macbook.cost()
  macbook.cost = function() {
    return v * 0.9
  }
}

function upgradeScreenSize(macbook) {
  const s = macbook.screenSize()
  macbook.screenSize = function() {
    return 13.3
  }
}

const myMb = new Macbook()

console.log(myMb.cost())
memory(myMb)
console.log(myMb.cost())
insurance(myMb)
console.log(myMb.cost())
academicDiscount(myMb)
console.log(myMb.cost())
upgradeScreenSize(myMb)

console.log(myMb.cost())
console.log(myMb.screenSize())
