import { UserModel } from "../entity/User.entity";
import { AppDataSource } from "../data-source";

const userRepository = AppDataSource.getRepository(UserModel);

export const find = async () => {
  return userRepository.find();
};
// export const createUser = async (input: any) => {
//   return userRepository.save(userRepository.create(input));
// };

// export const findUserByEmail = async ({ email }: { email: string }) => {
//   return await userRepository.findOneBy({ email });
// };

// export const findUserById = async (userId: string) => {
//   return await userRepository.findOneBy({ id: userId });
// };

// export const findUser = async (query: Object) => {
//   return await userRepository.findOneBy(query);
// };
