// https://qiita.com/edo_m18/items/612d2b31498d22d13b7b

const buffer = new ArrayBuffer(4 + 2 + 4)

let aryU16 = new Uint16Array(buffer, 0, 2)
aryU16[0] = 0x0001
aryU16[1] = 0x0100

let aryU8 = new Uint8Array(buffer, 4, 2)
aryU8[0] = 0xff
aryU8[1] = 0x0f

let aryI16 = new Int16Array(buffer, 6, 2)
aryI16[0] = -50
aryI16[1] = -30

const result = new Uint8Array(buffer)
console.log(result)
