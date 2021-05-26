import express from "express"
import cors from "cors"

type statement = {
    value: number,
    statement_date: number,
    description: string
}

type Account = {
    name: string,
    CPF: string,
    birth_date: number,
    balance: number
    statement: statement[]
}

let accounts: Account[] = [
    {
        name: "Pedro Vitor",
        CPF: "666.666.666-66",
        birth_date: 2121212,
        balance: 6666,
        statement: [
            {
                value: 0,
                statement_date: 0,
                description: "",
            }
        ]
    }
]


const app = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req, res) => {
    try {
        const name = req.body.name
        const CPF = req.body.CPF
        const birth_date = req.body.birth_date

        const createAccount = {
            name,
            CPF,
            birth_date,
            balance: 0,
            statement: [
                {
                    value: 0,
                    statement_date: 0,
                    description: "",
                }
            ]
        }

        accounts.push(<Account>createAccount)

        res.status(200)
            .send({
                message: "Account has been created.",
                account: createAccount
            })
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})
app.get("/users", (req, res) => {
    const result = accounts.map(user => ({
        name: user.name,
        CPF: user.CPF,
        birth_date: user.birth_date,
        balance: user.balance,
        statement: user.statement
    }))

    res
        .status(200)
        .send(result)
})

app.listen(3000, () => {
    console.log("Server is running at 3000")
})