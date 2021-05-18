const operation = process.argv[2]
const value1 = Number(process.argv[3])
const value2 = Number(process.argv[4])

switch (operation) {
    case "sum":
        console.log(`Result: ${value1 + value2}.`)
        break

    case "sub":
        console.log(`Result: ${value1 - value2}.`)
        break

    case "mul":
        console.log(`Result: ${value1 * value2}.`)
        break

    case "div":
        console.log(`Result: ${value1 / value2}.`)
        break
}
