import { v4 as uuidV4 } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const newUser: User = {
      id: uuidV4(),
      name,
      admin: false,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    };
    const user = new User(
      newUser.id,
      newUser.name,
      newUser.admin,
      newUser.email,
      newUser.created_at,
      newUser.updated_at
    );

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error("User does not exists!");
    }
    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find((user) => user.email === email);

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.users.find((user) => Object.is(user, receivedUser));
    user.admin = true;
    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
