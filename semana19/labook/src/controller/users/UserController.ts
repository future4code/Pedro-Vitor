import {Request, Response} from "express";
import {LoginInputDTO, SignupInputDTO} from "../../entities/User";
import {UserBusiness} from "../../business/UserBusiness";

export class UserController {

    async signup(req: Request, res: Response) {
        try {
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const userBusiness = new UserBusiness()
            const token = await userBusiness.signup(input)

            res
                .status(201)
                .send({token})

        } catch (error) {
            res
                .status(400)
                .send(error.sqlMessage || error.message)
        }
    }

    async login(req: Request, res: Response) {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await new UserBusiness().login(input)

            res
                .status(200)
                .send({token})

        } catch (error) {
            res
                .status(400)
                .send(error.sqlMessage || error.message)
        }
    }
}