import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("roles")
class Role {
  @PrimaryColumn()
  role_id: string;

  @CreateDateColumn()
  created_at: Date;
}

export { Role };
