import { IUsersPermissionsRepository } from "@modules/accounts/repositories/IUsersPermissionsRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserPermissionUseCase {
  constructor(
    @inject("UsersPermissionsRepository")
    private usersPermissionsRepository: IUsersPermissionsRepository
  ) {}

  async execute(user_id: string, permission_id: string): Promise<void> {
    const userRoleAlreadyExists =
      await this.usersPermissionsRepository.findByUserPermission(
        user_id,
        permission_id
      );

    if (userRoleAlreadyExists) {
      throw new AppError("User already has this role");
    }

    await this.usersPermissionsRepository.create(user_id, permission_id);
  }
}

export { CreateUserPermissionUseCase };
