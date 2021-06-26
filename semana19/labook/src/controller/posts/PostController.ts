import {Request, Response} from "express";
import {createPostDTO, Post, searchDTO} from "../../entities/Post";
import {PostBusiness} from "../../business/PostBusiness";

export class PostController {

    create = async (req: Request, res: Response) => {
        try {
            let message = "Success!"
            const token: string = req.headers.authorization as string

            const input: createPostDTO = {
                photo: req.body.photo,
                description: req.body.description,
                type: req.body.type,
                token
            }

            await new PostBusiness().createUser(input)

            res
                .status(201)
                .send({message})

        } catch (error) {
            res
                .status(400)
                .send(error.sqlMessage || error.message)
        }
    }

    search = async (req: Request, res: Response) => {
        try {
            const input: searchDTO = {
                id: req.params.id
            }

            const post: Post = await new PostBusiness().search(input)

            res
                .status(200)
                .send({post})

        } catch (error) {
            res
                .status(400)
                .send(error.sqlMessage || error.message)
        }

    }
}