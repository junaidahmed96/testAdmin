import * as express from "express";
import { auth } from "./../middleware/authJwt";

import { find } from "../controllers/userController";
const userRouter = express.Router();

userRouter.get("/", auth, find);

export { userRouter };
