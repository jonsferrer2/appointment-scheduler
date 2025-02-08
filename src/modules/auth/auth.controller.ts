import { Request, Response, NextFunction } from "express"
import { createUserService, loginService, createNewMember } from "./auth.services";

export const register = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await createUserService(req.body);
        res.status(201).json({ status: "success", message: "Registration success", data });
    } catch (error) {
        next(error);
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await loginService(req.body);
        res.cookie("user-session", data?.sessionToken, { domain: "localhost", path: "/" });
        delete data?.sessionToken;
        res.json({ status: "success", message: "Login success", data });
    } catch (error) {
        next(error);
    }
}

export const memberRegister = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    try {
        const data = await createNewMember(req.body);
        res.json({ status: "success", message: "Member successfully created", data });
    } catch (error) {
        next(error);
    }
}