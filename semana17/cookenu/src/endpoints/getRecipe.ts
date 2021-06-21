import {Request, Response} from "express";
import {connection} from "../connection";
import {getToken} from "../services/authenticator";

export default async function getRecipe(
    req: Request, res: Response
): Promise<void> {
    try {
        const token: string = req.headers.authorization!

        getToken(token)

        const [recipe] = await connection("cookenu_recipes")
            .where({id: req.params.id})

        const {id, title, description, author_id, created_at} = recipe

        res
            .status(200)
            .send({id, title, description, author_id, created_at})
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
}