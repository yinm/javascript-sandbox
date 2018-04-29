// https://qiita.com/hrdaya/items/291276a5a20971592216

function nl2br(str) {
  return str.replace(/\n/g, '<br>')
}

console.log(nl2br('a\nbb\ncccc'))