import { ICreateRoleDTO } from "../dtos/ICreateRoleDto";
import { Role } from "../infra/typeorm/entities/Roles";

interface IRolesRepository {
  create(data: ICreateRoleDTO): Promise<void>;
  find(name: string): Promise<Role>;
  delete(name: string): Promise<void>;
}

export { IRolesRepository };
