// http://js-next.hatenablog.com/entry/2015/05/07/211859

class Cat {
  constructor(name, age, color) {
    Object.assign(this, { name, age, color })
  }
}

const tama = new Cat('たま', 9, 'もも')

console.log(tama)
console.log(tama.name === 'たま')