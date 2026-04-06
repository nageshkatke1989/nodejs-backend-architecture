import { Request, Response } from "express";
import { RegisterUser } from "../../application/usecases/RegisterUser";

export class AuthController {
    constructor(private registerUser: RegisterUser) {}

    register =  async(req:Request, res:Response) => {
        const result = await this.registerUser.execute(req.body);
        res.json(result);
    }
}