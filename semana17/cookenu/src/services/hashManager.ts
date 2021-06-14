import {config} from "dotenv";
import {compareSync, genSaltSync, hashSync} from "bcryptjs";

config()

export const generateHash = (
    plainText: string
): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt: string = genSaltSync(rounds)
    return hashSync(plainText, salt)
}

export const compareHash = (
    plainText: string,
    cypherText: string
): boolean => compareSync(plainText, cypherText)