import { Request, Response } from "express";
import * as userServices from "../services/user.service";

const usersDetail = async (req: Request, res: Response) => {
  let user = await userServices.findUser(req.query);

  res.json(user);
};

export { usersDetail };
