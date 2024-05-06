import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateBusinessTable1715024072442 implements MigrationInterface {
  name = 'CreateBusinessTable1715024072442';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "business" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_0bd850da8dafab992e2e9b058e5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "business"`);
  }
}
