import { Request, Response, NextFunction } from "express";
import { ErrorHandler } from "../models/error-handler.model";

export const errorHandler = (
    err: Error & ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(err)
    if (err && err.code) {
        res.status(err.code).json({ status: "error", message: err.message });
    } else if (err) {
        res.status(500).json({ status: "error", message: err.message });
    }
}