// https://qiita.com/megadreams14/items/dded3cf770010bb8ff08

const buffer = new ArrayBuffer(2)
const dv = new DataView(buffer)

dv.setUint8(0, 12)
dv.setUint8(1, 3)

const month = dv.getUint8(0)
console.log(month)
console.log(month.toString(2))

const day = dv.getUint8(1)
console.log(day)
console.log(day.toString(2))
