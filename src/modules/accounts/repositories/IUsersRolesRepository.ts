import { UserRole } from "../infra/typeorm/entities/UserRole";

interface IUsersRolesRepository {
  create(user_id: string, role: string): Promise<void>;

  findByUser(user_id: string): Promise<UserRole[]>;

  findByUserRole(user_id: string, role_id: string): Promise<UserRole>;

  deleteById(user_id: string, role: string): Promise<void>;
}

export { IUsersRolesRepository };
