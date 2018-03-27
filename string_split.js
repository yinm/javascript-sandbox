function splitString(stringToSplit, separator) {
  const arrayOfStrings = stringToSplit.split(separator)

  console.log(`元の文字列: "${stringToSplit}"`)
  console.log(`区切り: "${separator}"`)
  console.log(`配列は "${arrayOfStrings.length}" 要素: `)

  for (let i = 0; i < arrayOfStrings.length; i++) {
    process.stdout.write(`${arrayOfStrings[i]} / `)
  }
  console.log('\n');
}

const
  tempestString = "Oh brave new world that has such people in it.",
  monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
  space = " ",
  comma = ","

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)
