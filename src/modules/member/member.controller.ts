import { Request, Response, NextFunction } from "express";
import { createMember } from "./member.services";

export const memberRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await createMember(req.body);
        res.json({ status: "success", message: "Member successfully created", data });
    } catch (error) {
        next(error);
    }
}