import app from "./app";
import {connection} from "./connection";

app.put("/user", async (req, res) => {
    try {
        if (!req.body.name) {
            res.send("Por favor, preencha o campo 'name'.")
        }

        if (!req.body.nickname) {
            res.send("Por favor, preencha o campo 'nickname'.")
        }

        if (!req.body.email) {
            res.send("Por favor, preencha o campo 'email'.")
        }

        await connection.raw(`
            INSERT INTO TodoListUser (name, nickname, email)
            VALUES ("${req.body.name}",
                    "${req.body.nickname}",
                    "${req.body.email}");
        `)

        res.status(201)
            .send("Usuario criado com sucesso !")
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

app.get("/user/:id", async (req, res) => {
    try {
        const result = await connection.raw(`
            SELECT id, nickname
            FROM TodoListUser
            WHERE id = "${req.params.id}"
        `)

        if (!result) {
            res.status(404)
                .send("Usuario não encontrado.")
        }

        res
            .status(200)
            .send(result[0][0]);
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

app.post("/user/edit/:id", async (req, res) => {
    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email

        if (name) {
            await connection.raw(`
                UPDATE TodoListUser
                SET name = "${req.body.name}"
                WHERE id = "${req.params.id}"
            `)
        }

        if (nickname) {
            await connection.raw(`
                UPDATE TodoListUser
                SET nickname = "${req.body.nickname}"
                WHERE id = "${req.params.id}"
            `)
        }

        if (email) {
            await connection.raw(`
                UPDATE TodoListUser
                SET email = "${req.body.email}"
                WHERE id = "${req.params.id}"
            `)
        }

        res.status(200)
            .send({message: "Dados atualizados com sucesso."})

    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})

app.put("/task", async (req, res) => {
    try {
        if (!req.body.title) {
            res.send("Por favor, preencha o campo 'title'.")
        }

        if (!req.body.description) {
            res.send("Por favor, preencha o campo 'description'.")
        }

        if (!req.body.limitDate) {
            res.send("Por favor, preencha o campo 'limitDate'.")
        }

        await connection.raw(`
            INSERT INTO TodoListTask
            VALUES ("${req.body.title}",
                    "${req.body.description}",
                    "${req.body.limitDate}",
                    "${req.body.creatorUserId}")
        `)

        res.status(201)
            .send("Task criada com sucesso !")
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
})