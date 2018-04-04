// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
]

const result = words.filter(word => {
  console.log(word)
  return word.length > 6
})

console.log(result)