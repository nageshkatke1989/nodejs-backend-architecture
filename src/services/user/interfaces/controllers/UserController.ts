import { Request, Response, NextFunction } from "express";
import { RegisterUser } from "../../application/usecases/RegisterUser";
import { LoginUser } from "../../application/usecases/LoginUser";
import { successResponse } from "../../../../shared/response/responseHandler";

export class AuthController {
    constructor(
        private registerUser: RegisterUser,
        private loginUser: LoginUser
    ) { }

    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Incoming request ", req.body);
            const result = await this.registerUser.execute(req.body);
            successResponse(201, res, result, "User Registered Successfully")
        } catch (err) {
            next(err);
        }
    }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            console.log("Incoming request ", req.body);
            const result = await this.loginUser.execute(req.body);
            successResponse(201, res, result, "User Logged In Successfully")
        } catch (error) {
            console.error("ERROR MESSAGE:", error);
            next(error)
        }
    }
}