// https://qiita.com/sanonosa/items/e6f503cbb95c8e6967f8

const word = 'プログラミングJavaScript';

[...word].forEach(c => console.log(c))

const reversed = [...word].reduceRight((p, c) => p + c)
console.log(reversed)

const reversed2 = [...word].reverse().join('')
console.log(reversed2)
