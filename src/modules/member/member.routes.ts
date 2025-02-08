import { Router } from "express";
import { getMembers, getMemberById } from "./member.controller";

const router = Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);

export default router;