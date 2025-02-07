import express from "express";
import { merge } from "lodash";
import { getUserBySessionToken } from "../models/user.model";
import { ErrorHandler } from "../models/error-handler.model";

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies["user-session"];
        if (!sessionToken) {
            throw new ErrorHandler(403, "Unauthorized");
        }

        const user = await getUserBySessionToken(sessionToken);
        if (!user) {
            throw new ErrorHandler(404, "User not found");
        }

        merge(req, { identity: user });

        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}