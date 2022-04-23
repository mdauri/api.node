import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUsersRoles1650324147076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_roles",
        columns: [
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "role_id",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      "users_roles",
      new TableForeignKey({
        name: "FKRoleUser",
        referencedTableName: "roles",
        referencedColumnNames: ["role_id"],
        columnNames: ["role_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "users_roles",
      new TableForeignKey({
        name: "FKUserRole",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users_roles", "FKRoleUser");
    await queryRunner.dropForeignKey("users_roles", "FKUserRole");
    await queryRunner.dropTable("users_roles");
  }
}
