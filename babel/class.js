class BaseClass {
  constructor() {
    this.name = 'BaseClass'
  }

  BaseFunc() {
    console.log('I am Base_a method.')
  }
}

class ExtendedClass extends BaseClass {
  constructor() {
    super()
    this.name = 'ExtendedClass'
  }

  ExtendedFunc() {
    const msg = `I'm a method of ${this.name}.`
    console.log(msg)
  }
}

const e = new ExtendedClass
e.ExtendedFunc()
e.BaseFunc()