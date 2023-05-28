import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeNameCheckToStatus1685044149770 implements MigrationInterface {
    name = 'ChangeNameCheckToStatus1685044149770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`check\` \`status\` tinyint NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`status\` \`check\` tinyint NOT NULL DEFAULT '0'`);
    }

}
