import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationship1715135050121 implements MigrationInterface {
  name = 'CreateRelationship1715135050121';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "brand" ADD "businessId" integer NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE "brand" ADD CONSTRAINT "FK_38a41d7353e25d5ed35b905cc4e" FOREIGN KEY ("businessId") REFERENCES "business"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "brand" DROP CONSTRAINT "FK_38a41d7353e25d5ed35b905cc4e"`,
    );
    await queryRunner.query(`ALTER TABLE "brand" DROP COLUMN "businessId"`);
  }
}
