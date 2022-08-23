import { NextFunction, Request, Response } from "express";
import { UserModel } from "../entity/User.entity";
import { AppDataSource } from "../data-source";

import * as userServices from "../services/user.service";

export const find = async (req: Request, res: Response) => {
  let user = await userServices.find();

  res.json(user);
};
// export class UserController {
//   private userRepository = AppDataSource.getRepository(UserModel);

//   async all(request: Request, response: Response, next: NextFunction) {
//     return this.userRepository.find();
//   }

//   // async one(request: Request, response: Response, next: NextFunction) {
//   //   return this.userRepository.findOne(request.params.id);
//   // }

//   // async save(request: Request, response: Response, next: NextFunction) {
//   //   return this.userRepository.save(request.body);
//   // }

//   // async remove(request: Request, response: Response, next: NextFunction) {
//   //   let userToRemove = await this.userRepository.findOneBy({
//   //     id: request.params.id,
//   //   });
//   //   await this.userRepository.remove(userToRemove);
//   // }
// }
