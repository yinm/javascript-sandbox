const func = () => {foo: 1}
console.log(func())

// const func2 = () => {foo: function() {}}

const func3 = () => ({foo: 1})
console.log(func3())