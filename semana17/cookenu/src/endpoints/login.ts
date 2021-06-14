import {Request, Response} from "express";
import {connection} from "../connection";
import {generateToken} from "../services/authenticator";
import {compareHash} from "../services/hashManager";

export default async function login(
    req: Request, res: Response
): Promise<void> {
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error("Por favor, preencha todos os dados obrigatários")
        }

        const [user] = await connection("cookenu_users")
            .where({email})

        const passwordCheck: boolean = compareHash(password, user.password)

        if (!passwordCheck) {
            throw new Error("Verifique as informações")
        }

        const access_token: string = generateToken({id: user.id})
        res
            .status(200)
            .send({access_token})
    } catch(error) {
        res
            .status(400)
            .send({message: error.message})
    }
}