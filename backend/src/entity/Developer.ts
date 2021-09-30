import {Entity, PrimaryGeneratedColumn, Column, Index} from "typeorm";

@Entity()
export class Developer {

    @Index()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column('char')
    sexo: string;

    @Column()
    idade: number;

    @Column()
    hobby: string;

    @Column("date")
    datanascimento: Date;

    @Index()
    @Column({ unique: true })
    cpf: string;
}
