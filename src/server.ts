import express from "express";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import routes from "./modules/routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(compression());
app.use(cors({
    credentials: true
}));

app.use(routes);
app.use(errorHandler);

export default app;