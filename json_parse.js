// https://dev.classmethod.jp/etc/concrete-example-of-json/
const jsonText = '{"foo": [1, null], "baz": {"foo": [true, "bar"], "baz": "qux"}}'

console.log(jsonText)
console.log(JSON.parse(jsonText))

console.log(jsonText['foo']) // undefined
console.log(JSON.parse(jsonText)['foo'])
console.log(JSON.parse(jsonText)['foo'][0])
console.log(JSON.parse(jsonText)['foo'][1])

console.log(JSON.parse(jsonText)['baz'])
console.log(JSON.parse(jsonText)['baz']['foo'])
console.log(JSON.parse(jsonText)['baz']['foo'][0])
console.log(JSON.parse(jsonText)['baz']['foo'][1])
console.log(JSON.parse(jsonText)['baz']['baz'])

