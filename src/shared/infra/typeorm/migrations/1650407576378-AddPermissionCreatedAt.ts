import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddPermissionCreatedAt1650406782660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "permissions",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("permissions", "created_at");
  }
}
