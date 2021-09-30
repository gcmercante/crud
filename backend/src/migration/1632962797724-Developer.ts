import {MigrationInterface, QueryRunner} from "typeorm";

export class Developer1632962797724 implements MigrationInterface {
    name = 'Developer1632962797724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD \`cpf\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD UNIQUE INDEX \`IDX_ea336f2673e81c4467e19844ac\` (\`cpf\`)`);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP COLUMN \`datanascimento\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD \`datanascimento\` date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP COLUMN \`datanascimento\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD \`datanascimento\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP INDEX \`IDX_ea336f2673e81c4467e19844ac\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP COLUMN \`cpf\``);
    }

}
