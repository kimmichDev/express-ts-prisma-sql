import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions";

export function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    res.status(error.code).json({
        success: error.success,
        message: error.message
    })
}