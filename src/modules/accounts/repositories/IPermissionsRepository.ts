import { ICreatePermissionsDTO } from "../dtos/ICreatePermissionsDto";
import { Permission } from "../infra/typeorm/entities/Permissions";

interface IPermissionsRepository {
  create(data: ICreatePermissionsDTO): Promise<void>;
  find(name: string): Promise<Permission>;
  delete(name: string): Promise<void>;
}

export { IPermissionsRepository };
