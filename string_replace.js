// https://qiita.com/hrdaya/items/291276a5a20971592216

function tab2space(str, num) {
  num = parseInt(num, 10)
  const space = new Array(isNaN(num) ? 5 : num + 1).join(' ')
  return str.replace(/\t/g, space)
}

console.log(tab2space('foo\tbar', 'a'))
console.log(tab2space('foo\tbar', 10))
