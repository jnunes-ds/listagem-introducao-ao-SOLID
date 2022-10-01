import { v4 as uuidV4, V4Options } from "uuid";

class User {
  constructor(
    public id: string,
    public name: string,
    public admin: boolean,
    public email: string,
    public created_at: Date,
    public updated_at: Date
  ) {}
}

export { User };
