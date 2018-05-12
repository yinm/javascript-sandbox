import BaseClass from './BaseClass'

export default class ExtendedClass extends BaseClass {
  constructor() {
    super()
    this.name = 'ExtendedClass'
  }

  ExtendedFunc() {
    const msg = `I'm a method of ${this.name}.`
    console.log(msg)
  }
}