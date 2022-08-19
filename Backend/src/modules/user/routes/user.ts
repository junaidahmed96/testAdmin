import express, { Request, Response } from "express";
import { auth } from "../../../middlewars/auth.middlewars";
import { usersDetail } from "../controllers/user";
const userRouter = express.Router();

userRouter.get("/", auth, usersDetail);

export { userRouter };
