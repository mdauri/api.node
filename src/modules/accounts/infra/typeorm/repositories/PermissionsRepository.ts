import { ICreatePermissionsDTO } from "@modules/accounts/dtos/ICreatePermissionsDto";
import { IPermissionsRepository } from "@modules/accounts/repositories/IPermissionsRepository";
import { getRepository, Repository } from "typeorm";

import { Permission } from "../entities/Permissions";

class PermissionsRepository implements IPermissionsRepository {
  private repository: Repository<Permission>;

  constructor() {
    this.repository = getRepository(Permission);
  }

  async create({ permission_id }: ICreatePermissionsDTO): Promise<void> {
    const Permission = this.repository.create({
      permission_id,
    });

    await this.repository.save(Permission);
  }

  async find(name: string): Promise<Permission> {
    const Permission = await this.repository.findOne(name);
    return Permission;
  }

  async delete(name: string): Promise<void> {
    await this.repository.delete(name);
  }
}

export { PermissionsRepository };
