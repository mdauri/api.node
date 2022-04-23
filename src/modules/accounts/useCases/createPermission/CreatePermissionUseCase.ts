import { IPermissionsRepository } from "@modules/accounts/repositories/IPermissionsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICreatePermissionsDTO } from "../../dtos/ICreatePermissionsDto";

@injectable()
class CreatePermissionUseCase {
  constructor(
    @inject("PermissionsRepository")
    private PermissionsRepository: IPermissionsRepository
  ) {}

  async execute({ permission_id }: ICreatePermissionsDTO): Promise<void> {
    const PermissionAlreadyExists = await this.PermissionsRepository.find(
      permission_id
    );

    if (PermissionAlreadyExists) {
      throw new AppError("Permission already exists");
    }

    await this.PermissionsRepository.create({
      permission_id,
    });
  }
}

export { CreatePermissionUseCase };
