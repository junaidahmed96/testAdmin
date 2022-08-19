import { Request, Response } from "express";
import { getErrorMessage } from "../../../utils/errors.utils";
import * as userServices from "../services/authorization";

export const login = async (req: Request, res: Response) => {
  try {
    const foundUser = await userServices.login(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    await userServices.register(req.body);
    res.status(200).send("Inserted successfully");
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
export const logout = (req: Request, res: Response) => {
  try {
    const authHeader: string | undefined = req.headers["authorization"];
    if (authHeader) {
      const logout = userServices.logout(authHeader);
      res.status(200).send(logout);
    }
  } catch (error) {
    return res.status(500).send(getErrorMessage(error));
  }
};
