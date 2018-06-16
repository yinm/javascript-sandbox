// https://qiita.com/megadreams14/items/1c88e71d87970bc8ab90

function readFLOAT(dv, isLittleEndian = false) {
  const data = dv.getUint32(0, isLittleEndian)
  let mantissa = (data & 0x00FFFFFF)

  if ((mantissa & 0x00800000) > 0) {
    mantissa = -1 * (~(mantissa - 0x01) & 0x00FFFFFF)
  }

  const exponential = data >> 24

  return mantissa * Math.pow(10, exponential)
}

const bufferA = new ArrayBuffer(4)
let dvA = new DataView(bufferA)
dvA.setUint32(0, 0x690100FF)
let isLittleEndian = true
const resultA = readFLOAT(dvA, isLittleEndian)
console.log(resultA)

const bufferB = new ArrayBuffer(4)
let dvB = new DataView(bufferB)
dvB.setUint32(0, 0x1F0E00FE)
const resultB = readFLOAT(dvB, isLittleEndian)
console.log(resultB)
