import { DocumentDefinition } from "mongoose";
import UserModel, { I_UserDocument } from "../models/user";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Login } from "../interface/login";
import { decode } from "punycode";

interface JwtPayload {
  _id: string;
  email: string;
}

export async function register(
  user: DocumentDefinition<I_UserDocument>
): Promise<void> {
  try {
    await UserModel.create(user);
  } catch (error) {
    throw error;
  }
}

export async function login(
  user: DocumentDefinition<I_UserDocument>
): Promise<Login> {
  try {
    const foundUser = await UserModel.findOne({ email: user.email });

    if (!foundUser) {
      throw new Error("Name of user is not correct");
    }

    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { _id: foundUser._id?.toString(), email: foundUser.email },
        `${process.env.SECRET_KEY_JWT}`,
        {
          expiresIn: "2 days",
        }
      );
      return {
        user: {
          email: foundUser.email,
          first_name: foundUser.first_name,
          last_name: foundUser.last_name,
        },
        token: token,
      };
    } else {
      throw new Error("Password is not correct");
    }
  } catch (error) {
    throw error;
  }
}

export function logout(authToken: string) {
  authToken = authToken.replace("Bearer ", "");
  const decoded = jwt.verify(
    authToken,
    `${process.env.SECRET_KEY_JWT}`
  ) as JwtPayload;
  if (decoded) {
    jwt.sign(
      { _id: decoded._id?.toString(), email: decoded.email },
      `${process.env.SECRET_KEY_JWT}`,
      {
        expiresIn: "1s",
      }
    );

    return "Successfully User Logout";
  }
}
