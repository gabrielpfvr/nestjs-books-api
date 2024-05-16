import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity('author')
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  nationality: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];
}
