import { UserModel } from "../entity/User.entity";
import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
const userRepository = AppDataSource.getRepository(UserModel);
interface JwtPayload {
  id: string;
  email: string;
}
export const register = async (input: any) => {
  try {
    return userRepository.save(userRepository.create(input));
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email: string, password: string) => {
  try {
    const foundUser = await userRepository.findOneBy({ email });

    if (!foundUser) {
      throw new Error("Name of user is not correct");
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password);

    if (isMatch) {
      const token = jwt.sign(
        { id: foundUser.id?.toString(), email: foundUser.email },
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
};

export const logout = (authToken: string) => {
  authToken = authToken.replace("Bearer ", "");
  const decoded = jwt.verify(
    authToken,
    `${process.env.SECRET_KEY_JWT}`
  ) as JwtPayload;
  if (decoded) {
    jwt.sign(
      { id: decoded.id?.toString(), email: decoded.email },
      `${process.env.SECRET_KEY_JWT}`,
      {
        expiresIn: "1s",
      }
    );

    return "Successfully User Logout";
  }
};
