import {MigrationInterface, QueryRunner} from "typeorm";

export class Developer1633010614886 implements MigrationInterface {
    name = 'Developer1633010614886'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_ea336f2673e81c4467e19844ac\` ON \`crud\`.\`developer\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` ADD UNIQUE INDEX \`IDX_ea336f2673e81c4467e19844ac\` (\`cpf\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_71b846918f80786eed6bfb68b7\` ON \`crud\`.\`developer\` (\`id\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_71b846918f80786eed6bfb68b7\` ON \`crud\`.\`developer\``);
        await queryRunner.query(`ALTER TABLE \`crud\`.\`developer\` DROP INDEX \`IDX_ea336f2673e81c4467e19844ac\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_ea336f2673e81c4467e19844ac\` ON \`crud\`.\`developer\` (\`cpf\`)`);
    }

}
