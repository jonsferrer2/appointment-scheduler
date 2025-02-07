import { Request, Response, NextFunction } from "express";
import { getAllUsers, getUser } from "./user.services";

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await getAllUsers();
        res.json({ status: "success", message: "Users successfully fetched", data });
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.params);
        const data = await getUser(req.params.id);
        res.json({ status: "success", message: "User successfully fetched", data });
    } catch (error) {
        next(error)
    }
}