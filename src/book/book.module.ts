import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './controller/book.controller';
import { BookService } from './service/book.service';
import { Book } from './entities/book.entity';
import { Author } from './entities/author.entity';
import { AuthorController } from './controller/author.controller';
import { AuthorService } from './service/author.service';

@Module({
    imports: [TypeOrmModule.forFeature([Book, Author])],
    controllers: [BookController, AuthorController],
    providers: [BookService, AuthorService]
})
export class BookModule {}
