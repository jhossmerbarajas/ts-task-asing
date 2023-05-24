import { MigrationInterface, QueryRunner } from "typeorm";

export class RelationsTasksWhitUser1684890190323 implements MigrationInterface {
    name = 'RelationsTasksWhitUser1684890190323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`user_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD \`user_asing\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_6ea2c1c13f01b7a383ebbeaebb0\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_599df5d16786d70986d3ee8ae42\` FOREIGN KEY (\`user_asing\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_599df5d16786d70986d3ee8ae42\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_6ea2c1c13f01b7a383ebbeaebb0\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`user_asing\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`user_id\``);
    }

}
