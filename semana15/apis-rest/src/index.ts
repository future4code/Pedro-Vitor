import express from 'express'
import cors from 'cors'

type User = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

const app = express()
app.use(express.json())
app.use(cors())

// Endpoint 1 - Receber todos os usuarios;
//a. GET
//b. A entidade manipulada nesse caso é /users
app.get("/users", (req, res) => {
    try {
        const filter = users.map(user => ({
            id: Number(user.id),
            name: user.name,
            email: user.email,
            type: user.type,
            age: Number(user.age)
        }))

        res
            .status(200)
            .send(filter)
    } catch (error) {
        res
            .status(400)
            .send("Something is wrong")
    }
})

//Endpoint 2 - Buscar usuarios com o mesmo type
//a. Query Parameters
//b.
app.get("/users", (req, res) => {

    try {
        enum USER_TYPES {
            ADMIN = "ADMIN",
            NORMAL = "NORMAL"
        }

        let type = req.query.type as string
        let search = req.query.search as string

        if (type) {
            type = type.toUpperCase()

            if (type in USER_TYPES) {
                const result = users.filter(user => user.type === type)
                return res
                    .status(200)
                    .send(result)
            }
            throw new Error("Invalid search")
        }
        if (search) {
            search = search.toLowerCase()

            const result = users.filter(user => user.name.toLowerCase().includes(search))
            return res.status(200).send(result)
        }

        res.status(200).send(users)
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})
//Endpoint 3 - Pesquisar usuario pelo nome dele
//a. Query Parameters
app.get("/users/search", (req, res) => {
    try {
        const name = req.query.name as string
        const result = users.filter(user => user.name === name)

        if (!result.length) {
            throw new Error("Usuario não existe")
        }
        if (req.query.name) {
            res
                .status(200)
                .send(result)
        }

    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

//Endpoint 4 - Adicionando um usuario
//a. Nada
//b. Não, pelo o que eu entendi, é mais correto utilizar o metodo PUT para editar,
// ou alterar informações, porém somente se for exigido meios de autitenticação para fazer o mesmo

app.post("/users", (req, res) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const email = req.body.email
        const type = req.body.type
        const age = req.body.age

        const addUser = {
            id,
            name,
            email,
            type,
            age
        }

        users.push(addUser)

        res
            .status(200)
            .send({
                message: "Added",
                user: addUser
            })
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

app.listen(3003, () => {
    console.log('Server is running at port 3003')
})
