import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./author.entity";

@Entity('book')
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    pages: number;

    @JoinTable()
    @ManyToMany(() => Author, author => author.books, {
        cascade: true
    })
    authors: Author[];
}