import { IUsersRolesRepository } from "@modules/accounts/repositories/IUsersRolesRepository";
import { getRepository, Repository } from "typeorm";

import { UserRole } from "../entities/UserRole";

class UsersRolesRepository implements IUsersRolesRepository {
  private repository: Repository<UserRole>;

  constructor() {
    this.repository = getRepository(UserRole);
  }
  async create(user_id: string, role: string): Promise<void> {
    const userRole = this.repository.create({
      user_id,
      role_id: role,
    });
    await this.repository.save(userRole);
  }
  async findByUser(user_id: string): Promise<UserRole[]> {
    const userRole = await this.repository.find({
      where: { user_id },
    });
    return userRole;
  }
  async findByUserRole(user_id: string, role_id: string): Promise<UserRole> {
    const userRole = await this.repository.findOne({
      where: { user_id, role_id },
    });
    return userRole;
  }
  async deleteById(user_id: string, role: string): Promise<void> {
    const userRole = await this.repository.findOne({
      where: { role_id: role, user_id },
    });
    if (userRole) {
      await this.repository.delete(userRole);
    }
  }
}

export { UsersRolesRepository };
