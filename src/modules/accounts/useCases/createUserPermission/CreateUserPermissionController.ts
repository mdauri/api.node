import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserPermissionUseCase } from "./CreateUserPermissionUseCase";

class CreateUserPermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, permission_id } = request.body;

    const createUserPermissionUseCase = container.resolve(
      CreateUserPermissionUseCase
    );

    await createUserPermissionUseCase.execute(user_id, permission_id);

    return response.status(201).send();
  }
}

export { CreateUserPermissionController };
