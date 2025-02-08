import { Request, Response, NextFunction } from "express";
import { onGetMembers, onGetMemberById } from "./member.services";

export const getMembers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await onGetMembers();
        res.json({ status: "success", message: "Members successfully fetched", data });
    } catch (error) {
        next(error);
    }
}

export const getMemberById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await onGetMemberById(req.params.id);
        res.json({ status: "success", message: "Member successfully fetched", data });
    } catch (error) {
        next(error);
    }
}