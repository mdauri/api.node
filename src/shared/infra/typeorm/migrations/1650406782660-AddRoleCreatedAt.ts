import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddRoleCreatedAt1650406782660 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "roles",
      new TableColumn({
        name: "created_at",
        type: "timestamp",
        default: "now()",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("roles", "created_at");
  }
}
