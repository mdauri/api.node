import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserRoleUseCase } from "./CreateUserRoleUseCase";

class CreateUserRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, role_id } = request.body;

    const createUserRoleUseCase = container.resolve(CreateUserRoleUseCase);

    await createUserRoleUseCase.execute(user_id, role_id);

    return response.status(201).send();
  }
}

export { CreateUserRoleController };
