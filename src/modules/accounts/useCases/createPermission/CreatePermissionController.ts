import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePermissionUseCase } from "./CreatePermissionUseCase";

class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { permission_id } = request.body;
    const createPermissionUseCase = container.resolve(CreatePermissionUseCase);

    await createPermissionUseCase.execute({ permission_id });

    return response.status(201).send();
  }
}

export { CreatePermissionController };
