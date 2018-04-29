// https://qiita.com/hrdaya/items/291276a5a20971592216

function nl2br(str) {
  return str.replace(/\n/g, '<br>')
}

const stringWithBr = nl2br('a\nbb\ncccc<br />')


function br2nl(str) {
  return str.replace(/(<br>|<br \/>)/gi, '\n')
}

console.log(stringWithBr)
console.log(br2nl(stringWithBr))