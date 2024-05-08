import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertData1715205226048 implements MigrationInterface {
  name = 'InsertData1715205226048';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO business ("id", "name") VALUES (1, 'Business1'), (2, 'Business2')`,
    );
    await queryRunner.query(
      `INSERT INTO brand ("name", "businessId") VALUES ('Brand1', 1), ('Brand2', 1), ('Brand3', 1), ('Brand4', 2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM brand`);
    await queryRunner.query(`DELETE FROM business`);
  }
}
