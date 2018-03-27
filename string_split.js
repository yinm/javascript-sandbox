const names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand "
console.log(names)

const re = /\s*;\s*/
const nameList = names.split(re)
console.log(nameList)