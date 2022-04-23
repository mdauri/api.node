import { instanceToInstance } from "class-transformer";

import { IUserReponseDTO } from "../dtos/IUserResponseDTO";
import { User } from "../infra/typeorm/entities/User";

class UserMap {
  static toDTO({
    email,
    name,
    id,
    avatar,
    avatar_url,
    permissions,
    roles,
  }: User): IUserReponseDTO {
    const auxPermissions = permissions.map(
      (permission) => permission.permission_id
    );

    const auxRoles = roles.map((role) => role.role_id);

    const user = instanceToInstance({
      email,
      name,
      id,
      avatar,
      avatar_url,
      permissions: auxPermissions,
      roles: auxRoles,
    });
    return user;
  }
}

export { UserMap };
