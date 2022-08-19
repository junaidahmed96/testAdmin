import express, { Request, Response } from "express";
import { auth } from "../../../middlewars/auth.middlewars";
import { register, login, logout } from "../controllers/authorization";

const authorizationRouter = express.Router();

authorizationRouter.post("/register", register);
authorizationRouter.post("/login", login);
authorizationRouter.post("/logout", auth, logout);

export { authorizationRouter };
