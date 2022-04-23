import { IRolesRepository } from "@modules/accounts/repositories/IRolesRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICreateRoleDTO } from "../../dtos/ICreateRoleDto";

@injectable()
class CreateRoleUseCase {
  constructor(
    @inject("RolesRepository")
    private rolesRepository: IRolesRepository
  ) {}

  async execute({ role_id }: ICreateRoleDTO): Promise<void> {
    const roleAlreadyExists = await this.rolesRepository.find(role_id);

    if (roleAlreadyExists) {
      throw new AppError("Role already exists");
    }

    await this.rolesRepository.create({
      role_id,
    });
  }
}

export { CreateRoleUseCase };
