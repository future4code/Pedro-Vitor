import {Request, Response} from "express"
import {addUserAddress} from "../types";
import axios from "axios";
import connection from "../connection";
import idGenerator from "../services/idGenerator";


export default async function addAddress(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const {cep} = req.body
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)

        const id = idGenerator()

        const address: addUserAddress = {
            id: id,
            cep: response.data.cep,
            logradouro: response.data.logradouro,
            complemento: response.data.complemento,
            bairro: response.data.bairro,
            cidade: response.data.localidade,
            estado: response.data.uf
        }
        await connection("User_Address").insert(address)
        res.status(201)
            .send("GG!")

    } catch (error) {
        res.status(400)
            .send({message: error.message})
    }
}