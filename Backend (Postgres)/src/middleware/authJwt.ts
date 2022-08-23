import { Secret, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import * as jwt from "jsonwebtoken";
config();

export const SECRET_KEY: Secret = `${process.env.SECRET_KEY_JWT}`;

export interface CustomRequest extends Request {
  token: string | JwtPayload;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("auth");
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    (req as CustomRequest).token = decoded;

    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Please authenticate the user");
  }
};
