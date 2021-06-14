import {Request, Response} from "express";
import {connection} from "../connection";
import {generateId} from "../services/idGenerator";
import {user} from "../types";
import {generateHash} from "../services/hashManager";
import {generateToken} from "../services/authenticator";

export default async function signup(
    req: Request, res: Response
): Promise<void> {
    try {
        const {name, email, password} = req.body

        if (!name || !email || !password) {
            throw new Error("Por favor, preencha todos os dados obrigatários")
        }

        const [user] = await connection("cookenu_users")
            .where({email})

        if (user) {
            throw new Error("Email já está sendo usado.")
        }

        const id: string = generateId()

        const addUser: user = {
            id,
            name,
            email,
            password: generateHash(password)
        }

        await connection("cookenu_users")
            .insert(addUser)

        const access_token: string = generateToken({id})

        res
            .status(200)
            .send({access_token})

    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
}