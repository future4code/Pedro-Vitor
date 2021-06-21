import {createPostDTO, Post, searchDTO} from "../entities/Post";
import {TokenManager} from "../services/authenticator";
import {IdGenerator} from "../services/idGenerator";
import {AuthenticationData} from "../entities/User";
import {PostDatabase} from "../data/PostDatabase";

export class PostBusiness {

    async createUser(input: createPostDTO) {

        try {
            if (!input.photo || !input.description || !input.type) {
                throw new Error('"photo", "description" and "type" must be provided.')
            }

            const tokenManager = new TokenManager()

            if (!input.token) {
                throw new Error("Invalid JWT")
            }

            const tokenData: AuthenticationData = tokenManager.getTokenData(input.token)

            const idGenerator = new IdGenerator()
            const id: string = idGenerator.generateId()

            const post: Post = {
                id,
                photo: input.photo,
                description: input.description,
                type: input.type,
                authorId: tokenData.id,
                createdAt: new Date(),
            }

            await new PostDatabase().createPost(post)

        } catch (error) {
            throw new Error(error.message)
        }
    }

    async search(input: searchDTO) {
        try {
            const post: Post = await new PostDatabase().search(input.id)

            if (!post) {
                throw new Error("Post not found")
            }

            return post

        } catch (error) {
            throw new Error(error.message)
        }
    }
}