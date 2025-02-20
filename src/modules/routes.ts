import { Router } from "express";
import authRouter from "./auth/auth.routes";
import userRouter from "./user/user.routes";
import memberRouter from "./member/member.routes";
import { isAuthenticated } from "../middlewares/index";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", isAuthenticated, userRouter);
router.use("/members", isAuthenticated, memberRouter)

export default Router().use("/api", router);