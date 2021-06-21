import {Request, Response} from "express";
import {getToken} from "../services/authenticator";
import {connection} from "../connection";
import {generateId} from "../services/idGenerator";

export default async function createRecipe(
    req: Request, res: Response
): Promise<void> {
    try {
        const {title, description} = req.body
        const token = req.headers.authorization

        const tokenData = getToken(token!)

        const id = generateId()

        const addRecipe = {
            id,
            title,
            description,
            author_id: tokenData!.id
        }
        await connection("cookenu_recipes")
            .insert(addRecipe)

        res
            .status(200)
            .send(addRecipe)
    } catch (error) {
        res
            .status(400)
            .send({message: error.message})
    }
}