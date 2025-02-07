import { Router } from "express";
import { memberRegister } from "./member.controller";

const router = Router();

router.post("/register", memberRegister);