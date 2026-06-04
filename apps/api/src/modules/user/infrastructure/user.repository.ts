import { UserModel } from "../model/user.model";

export class UserRepository {
  async findByEmail(email: string) {
    return UserModel.findOne({ email });
  }

  async create(data: {
    name: string;
    email: string;
    password: string;
  }) {
    return UserModel.create(data);
  }

  async findById(id: string) {
    return UserModel.findById(id);
  }
}
