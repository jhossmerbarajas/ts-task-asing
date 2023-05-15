import { MigrationInterface, QueryRunner } from "typeorm";

export class AsingRoleType1684148256285 implements MigrationInterface {
    name = 'AsingRoleType1684148256285'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`role\` enum ('ADMIN', 'USER') NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`role\``);
    }

}
