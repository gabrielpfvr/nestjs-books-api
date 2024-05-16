import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './controller/book.controller';
import { BookService } from './service/book.service';
import { Book } from './model/book.entity';
import { AuthorModule } from '../author/author.module';

@Module({
  imports: [AuthorModule, TypeOrmModule.forFeature([Book])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
