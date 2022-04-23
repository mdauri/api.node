import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("permissions")
class Permission {
  @PrimaryColumn()
  permission_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Permission };
