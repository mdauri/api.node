import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("users_roles")
class UserRole {
  @PrimaryColumn()
  user_id: string;

  @PrimaryColumn()
  role_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { UserRole };
