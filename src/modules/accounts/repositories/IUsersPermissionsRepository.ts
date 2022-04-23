import { UserPermission } from "../infra/typeorm/entities/UserPermission";

interface IUsersPermissionsRepository {
  create(user_id: string, permission_id: string): Promise<void>;

  findByUser(user_id: string): Promise<UserPermission[]>;

  findByUserPermission(
    user_id: string,
    permission_id: string
  ): Promise<UserPermission>;

  deleteById(user_id: string, permission_id: string): Promise<void>;
}

export { IUsersPermissionsRepository };
