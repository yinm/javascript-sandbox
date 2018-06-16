// https://qiita.com/megadreams14/items/1c88e71d87970bc8ab90

function readSFLOAT(dv, isLitterEndian = false) {
  const data = dv.getUint16(0, isLitterEndian)
  let mantissa = (data & 0x0FFF)

  if ((mantissa & 0x0800) > 0) {
    mantissa = -1 * (~(mantissa - 0x01) & 0x0FFF)
  }

  const exponential = data >> 12

  return mantissa * Math.pow(10, exponential)
}

const buffer = new ArrayBuffer(2)
let dv = new DataView(buffer)
dv.setUint16(0, 0x7200)
const isLitterEndian = true

const result = readSFLOAT(dv, isLitterEndian)
console.log(result)
