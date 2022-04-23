import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CreateUsersPermissions1650324147076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users_permissions",
        columns: [
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "permission_id",
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
      "users_permissions",
      new TableForeignKey({
        name: "FKPermissionUser",
        referencedTableName: "permissions",
        referencedColumnNames: ["permission_id"],
        columnNames: ["permission_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );

    await queryRunner.createForeignKey(
      "users_permissions",
      new TableForeignKey({
        name: "FKUserPermission",
        referencedTableName: "users",
        referencedColumnNames: ["id"],
        columnNames: ["user_id"],
        onDelete: "SET NULL",
        onUpdate: "SET NULL",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users_permissions", "FKPermissionUser");
    await queryRunner.dropForeignKey("users_permissions", "FKUserPermission");
    await queryRunner.dropTable("users_permissions");
  }
}
