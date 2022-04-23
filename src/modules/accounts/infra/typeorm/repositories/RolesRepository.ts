import { ICreateRoleDTO } from "@modules/accounts/dtos/ICreateRoleDto";
import { IRolesRepository } from "@modules/accounts/repositories/IRolesRepository";
import { getRepository, Repository } from "typeorm";

import { Role } from "../entities/Roles";

class RolesReposiotry implements IRolesRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = getRepository(Role);
  }

  async create({ role_id }: ICreateRoleDTO): Promise<void> {
    const role = this.repository.create({
      role_id,
    });

    await this.repository.save(role);
  }

  async find(name: string): Promise<Role> {
    const role = await this.repository.findOne(name);
    return role;
  }

  async delete(name: string): Promise<void> {
    await this.repository.delete(name);
  }
}

export { RolesReposiotry };
