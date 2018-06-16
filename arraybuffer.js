// https://qiita.com/megadreams14/items/dded3cf770010bb8ff08

const buffer = new ArrayBuffer(4)
const dv = new DataView(buffer)

dv.setUint16(0, 2017, true)
dv.setUint8(2, 12)
dv.setUint8(3, 3)

console.log(dv.getUint8(0).toString(2))
console.log(dv.getUint8(1).toString(2))
console.log(dv.getUint8(2).toString(2))
console.log(dv.getUint8(3).toString(2))

const year = dv.getUint16(0, true)
console.log(year)

const month = dv.getUint8(2)
console.log(month)

const day = dv.getUint8(3)
console.log(day)
