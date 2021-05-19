import express, {Express} from "express"
import cors from "cors"
import {countries, country} from "./countries";

const app: Express = express()

app.use(express.json())
app.use(cors())

// Endpoint 1
app.get("/countries/all", (req, res) => {
    const filter = countries.map(country => ({
        id: country.id,
        name: country.name
    }))

    res
        .status(200)
        .send(filter)
})

// Endpoint 2
app.get("/countries/:id", (req, res) => {
    const id = Number(req.params.id)
    const result: country | undefined = countries.find(country => country.id === id)
    if (result) {
        res
            .status(200)
            .send(result)
    } else {
        res.status(400)
            .send("ID not found")
    }

})

//Endpoint 3
app.get("/countries/search", (req, res) => {
    const name = req.query.name as string
    const result = countries.filter((country) => country.name.toLowerCase().includes(name.toLowerCase()))

    res
        .status(200)
        .send(result)
})

app.get("/countries/:id", (req, res) => {
    try {
        let result: country[] = countries
        if (req.params.name) {
            result = result.filter(country => country.name.includes(req.query.name as string))
        }

        if (req.params.capital) {
            result = result.filter(country => country.name.includes(req.query.capital as string))
        }

        if (req.params.continent) {
            result = result.filter(country => country.name.includes(req.query.continent as string))
        }

        if (result.length > 0) {
            throw new Error("Results were not found.")
        }
        res
            .status(200)

    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})