import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "../errors/AppError";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers.authorization;

    if(!header) {
        return next(new AppError("Unauthorised", 401));
    }

    const token = header.split(" ")[1];
    
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        );

        (req as any).user = decoded;
        next();
    } catch (error) {
        next(new AppError("Invalid token", 401))
    }
}