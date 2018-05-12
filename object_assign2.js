// http://js-next.hatenablog.com/entry/2015/05/07/211859

class Cat {
  constructor(name, age, color) {
    Object.assign(this, { name, age, color })
  }
}

let tama = new Cat('たま', 9, 'もも')
console.log(tama)

let cat = Object.assign({}, tama)
tama.name = 'タマ'
console.log(tama.name)
console.log(cat.name)