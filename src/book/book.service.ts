import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookRequest } from './dto/book-request.dto';
import { BookUpdateRequest } from './dto/book-update-request.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService {

    constructor(
        @InjectRepository(Book)
        private readonly repository: Repository<Book>
    ) {}

    static readonly NOT_FOUND_EXCEPTION = new NotFoundException(`Livro não encontrado.`)

    findAll() {
        return this.repository.find();
    }

    async findOne(id: number) {
        const book = await this.repository.findOne(id);
        if (!book) {
            throw BookService.NOT_FOUND_EXCEPTION;
        }
        return book;
    }

    create(request: BookRequest) {
        const book = this.repository.create(request);
        return this.repository.save(book);
    }

    async update(id: number, updateRequest: BookUpdateRequest) {
        const book = await this.repository.preload({
            id, ...updateRequest
        });
        if (!book) {
            throw BookService.NOT_FOUND_EXCEPTION;
        }
        return this.repository.save(book);
    }

    async delete(id: number) {
        const book = await this.repository.findOne(id);

        if (!book) {
            throw BookService.NOT_FOUND_EXCEPTION;
        }
        return this.repository.remove(book);
    }
}
