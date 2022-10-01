import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = (request.headers as unknown) as IHeaders;
    const users = this.listAllUsersUseCase.execute({ user_id });

    if (!users) {
      return response.status(404);
    }

    return response.json(200).send(users);
  }
}

export { ListAllUsersController };
