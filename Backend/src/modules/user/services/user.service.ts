import { FilterQuery, QueryOptions } from "mongoose";

import UserModel, { I_UserDocument } from "../../authorization/models/user";
import { Users } from "../interface/user";

export async function findUser(
  query: FilterQuery<I_UserDocument>,
  options: QueryOptions = { lean: true }
): Promise<Users[] | string> {
  let user = await UserModel.find(query);
  if (user.length) {
    return user;
  }
  return "User Data Not Exist";
}
