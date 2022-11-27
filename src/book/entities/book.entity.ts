import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('BOOKS')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    author: string;

    @Column('json', {nullable: true})
    tags: string[];
}