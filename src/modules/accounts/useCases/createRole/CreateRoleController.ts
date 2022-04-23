import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRoleUseCase } from "./CreateRoleUseCase";

class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { role_id } = request.body;
    const createRoleUseCase = container.resolve(CreateRoleUseCase);

    await createRoleUseCase.execute({ role_id });

    return response.status(201).send();
  }
}

export { CreateRoleController };
