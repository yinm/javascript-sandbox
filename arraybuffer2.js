// https://qiita.com/edo_m18/items/612d2b31498d22d13b7b

const buffer = new ArrayBuffer(4 + 2 + 4)
const view = new DataView(buffer)
let offset = 0

view.setUint16(offset, 0x0001, true)
offset += 2
view.setUint16(offset, 0x0100, true)
offset += 2

view.setUint8(offset, 0xff)
offset += 1
view.setUint8(offset, 0x0f)
offset += 1

view.setInt16(offset, -50, true)
offset += 2
view.setUint16(offset, -30, true)
offset += 2

const result = new Uint8Array(buffer)
console.log(result)
