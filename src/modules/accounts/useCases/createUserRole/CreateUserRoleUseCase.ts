import { IUsersRolesRepository } from "@modules/accounts/repositories/IUsersRolesRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserRoleUseCase {
  constructor(
    @inject("UsersRolesRepository")
    private usersRolesRepository: IUsersRolesRepository
  ) {}

  async execute(user_id: string, role_id: string): Promise<void> {
    const userRoleAlreadyExists =
      await this.usersRolesRepository.findByUserRole(user_id, role_id);

    if (userRoleAlreadyExists) {
      throw new AppError("User already has this role");
    }

    await this.usersRolesRepository.create(user_id, role_id);
  }
}

export { CreateUserRoleUseCase };
