import {MigrationInterface, QueryRunner} from "typeorm";

export class Developer1633087026210 implements MigrationInterface {
    name = 'Developer1633087026210'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_ea336f2673e81c4467e19844ac\` ON \`crud\`.\`developer\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP COLUMN \`cpf\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD \`cpf\` varchar(255) NOT NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_ea336f2673e81c4467e19844ac\` ON \`crud\`.\`developer\` (\`cpf\`)`);
    }

}
