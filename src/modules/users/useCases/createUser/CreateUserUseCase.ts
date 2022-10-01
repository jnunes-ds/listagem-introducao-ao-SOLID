import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const createdUser = this.usersRepository.findByEmail(email);

    if (createdUser?.id) {
      throw new Error("Email is already being used!");
    }
    const user = this.usersRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
