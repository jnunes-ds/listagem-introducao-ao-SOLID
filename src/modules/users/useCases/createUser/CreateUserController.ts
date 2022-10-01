import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    const user = this.createUserUseCase.execute({ name, email });

    if (!user.id) {
      return response.status(400);
    }

    return response.status(201).send(user);
  }
}

export { CreateUserController };
