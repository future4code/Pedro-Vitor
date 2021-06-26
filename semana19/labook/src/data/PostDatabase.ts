import {BaseDatabase} from "./BaseDatabase";
import {Post, postModel} from "../entities/Post";

export class PostDatabase extends BaseDatabase {

    async createPost(post: Post) {
        try {
            await this.connection("labook_posts")
                .insert({
                    id: post.id,
                    photo: post.photo,
                    description: post.description,
                    type: post.type,
                    author_id: post.authorId,
                    created_at: post.createdAt.toLocaleDateString("YYYY-MM-DD")
                })

        } catch (error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    async search(id: string): Promise<Post> {
        try {
            const queryResult: any = await this.connection("labook_posts")
                .select("*")
                .where({ id })

            return postModel(queryResult[0])

        } catch(error) {
            throw new Error(error.sqlMessage || error.message)
        }
    }
}