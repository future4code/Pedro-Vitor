import {connection} from "../connection";

const userTableName  = "Users_51"

export const createUser = async (id: string, email: string, password: string) => {
    await connection
        .insert({
            id,
            email,
            password,
        })
        .into(userTableName );
};