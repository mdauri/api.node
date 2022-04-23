import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users_permissions")
class UserPermission {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  permission_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { UserPermission };
