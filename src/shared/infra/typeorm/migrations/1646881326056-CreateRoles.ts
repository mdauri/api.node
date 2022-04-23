import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateRoles1646881326056 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "roles",
        columns: [{ name: "role_id", type: "varchar", isUnique: true }],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("roles");
  }
}
