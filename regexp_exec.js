// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

const myReg = /ab*/g
const str = 'abbcdefabh'
console.log(`str.length: ${str.length}`)

let myArray
while ((myArray = myReg.exec(str)) !== null) {
  let message = `${myArray[0]} を見つけました。`
  message += `次のマッチは ${myReg.lastIndex} からです`
  console.log(message)
}