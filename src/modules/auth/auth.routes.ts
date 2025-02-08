import { Router } from "express";
import { register, login, memberRegister } from "./auth.controller";

const router = Router();

router.post("/register", register);
router.post("/member-register", memberRegister);
router.post("/login", login);

export default router;