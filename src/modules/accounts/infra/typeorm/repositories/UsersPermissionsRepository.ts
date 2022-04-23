import { IUsersPermissionsRepository } from "@modules/accounts/repositories/IUsersPermissionsRepository";
import { getRepository, Repository } from "typeorm";

import { UserPermission } from "../entities/UserPermission";

class UsersPermissionsRepository implements IUsersPermissionsRepository {
  private repository: Repository<UserPermission>;

  constructor() {
    this.repository = getRepository(UserPermission);
  }
  async create(user_id: string, permission_id: string): Promise<void> {
    const userPermission = this.repository.create({
      user_id,
      permission_id,
    });
    await this.repository.save(userPermission);
  }
  async findByUser(user_id: string): Promise<UserPermission[]> {
    const userPermission = await this.repository.find({
      where: { user_id },
    });
    return userPermission;
  }
  async findByUserPermission(
    user_id: string,
    permission_id: string
  ): Promise<UserPermission> {
    const userPermission = await this.repository.findOne({
      where: { user_id, permission_id },
    });
    return userPermission;
  }
  async deleteById(user_id: string, permission_id: string): Promise<void> {
    const userPermission = await this.repository.findOne({
      where: { user_id, permission_id },
    });
    if (userPermission) {
      await this.repository.delete(userPermission);
    }
  }
}

export { UsersPermissionsRepository };
