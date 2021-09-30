import {MigrationInterface, QueryRunner} from "typeorm";

export class Developer1632956066754 implements MigrationInterface {
    name = 'Developer1632956066754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`crud\`.\`developer\` (\`id\` char(36) NOT NULL, \`nome\` varchar(255) NOT NULL, \`sexo\` char NOT NULL, \`idade\` int NOT NULL, \`hobby\` varchar(255) NOT NULL, \`datanascimento\` datetime NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`crud\`.\`developer\``);
    }

}
