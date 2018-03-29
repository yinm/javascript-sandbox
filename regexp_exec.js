const myReg = /d(b+)(d)/ig
const myArray = myReg.exec("cdbBdbsbz")

console.log(myReg)
console.log(myArray)
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray['index'])
console.log(myArray['input'])
