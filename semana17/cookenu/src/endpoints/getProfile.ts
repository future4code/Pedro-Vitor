import {Request, Response} from "express";
import {connection} from "../connection";
import {getToken} from "../services/authenticator";

export default async function getProfile(
    req: Request, res: Response
): Promise<void> {
    try {
        const token: string = req.headers.authorization!

        getToken(token)

        const [user] = await connection("cookenu_users")
            .where({id: req.params.id})

        const {id, name, email} = user

        res
            .status(200)
            .send({id, name, email})
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
}