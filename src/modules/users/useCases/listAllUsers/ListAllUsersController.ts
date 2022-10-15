import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = (request.headers as unknown) as IHeaders;
      const users = this.listAllUsersUseCase.execute({ user_id });

      if (!users.length) {
        return response.status(404);
      }
      return response.status(200).send(users);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
