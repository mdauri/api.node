import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissions1646881522463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "permissions",
        columns: [{ name: "permission_id", type: "varchar", isUnique: true }],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("permissions");
  }
}
