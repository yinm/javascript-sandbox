// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec

const A = ["Frank", "Emily", "Jane", "Harry", "Nick", "Beth", "Rick",
  "Terrence", "Carol", "Ann", "Terry", "Frank", "Alice", "Rick",
  "Bill", "Tom", "Fiona", "Jane", "William", "Joan", "Beth"];

function lookup(input) {
  const firstName = /\w+/i.exec(input.value)
  if (!firstName) {
    console.log(`${input.value} isn't a name!`)
    return
  }

  let count = 0
  for (let i = 0; i < A.length; i++) {
    if (firstName[0].toLowerCase() == A[i].toLowerCase()) {
      count++
    }
  }

  const midstring = count == 1
    ? " other has "
    : " others have "
  console.log(`Thanks, ${count}${midstring}the same name!`)
}

lookup({value: "Rick"})
