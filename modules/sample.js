const myGradesCalculate = (function() {
  const myGrades = [93, 95, 88, 0, 55, 91]

  const average = () => {
    const total = myGrades.reduce((accumulator, item) => {
      return accumulator + item
    }, 0)

    return `Your average grade is ${total / myGrades.length}.`
  }

  const failing = () => {
    const failingGrades = myGrades.filter(item => item < 70)
    return `You failed ${failingGrades.length} times.`
  }

  return {
    average,
    failing,
  }
})()

console.log(myGradesCalculate.average())
console.log(myGradesCalculate.failing())

