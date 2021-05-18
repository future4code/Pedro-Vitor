//a.
// Basta utilizar a propriedade process.argv

//b.
const name = process.argv[2]
const age = process.argv[3]

console.log(`Hello, ${name}! You are ${age} years old.`)

//c.
const newAge = Number(process.argv[3])

console.log(`Hello, ${name}! You are ${age} years old. In 7 years you're going to be ${newAge + 7} years old.`)
