import { Response } from "express";

export const successResponse = <T = unknown>(
    statusCode: number = 200,
    res: Response,
    data: T,
    message: string = "Success"
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    })
}