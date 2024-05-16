import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookRequest } from '../dto/book-request.dto';
import { BookUpdateRequest } from '../dto/book-update-request.dto';
import { Book } from '../entities/book.entity';
import { AuthorService } from './author.service';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,

    private readonly authorService: AuthorService,
  ) {}

  static readonly LIVRO_NAO_ENCONTRADO = new NotFoundException(
    `Livro não encontrado.`,
  );

  findAll() {
    return this.bookRepository.find();
  }

  async findOne(id: number) {
    const book = await this.bookRepository.findOne(id);

    if (!book) {
      throw BookService.LIVRO_NAO_ENCONTRADO;
    }
    return book;
  }

  async create(request: BookRequest) {
    const authors = await Promise.all(
      request.authorsIds.map((id) => this.authorService.findAuthorById(id)),
    );

    const book = this.bookRepository.create({
      ...request,
      authors,
    });

    this.bookRepository.save(book);
  }

  async update(id: number, updateRequest: BookUpdateRequest) {
    const authors = await Promise.all(
      updateRequest.authorsIds!.map((id) =>
        this.authorService.findAuthorById(id),
      ),
    );

    const book = await this.bookRepository.preload({
      id,
      ...updateRequest,
      authors,
    });

    if (!book) {
      throw BookService.LIVRO_NAO_ENCONTRADO;
    }

    this.bookRepository.save(book);
  }

  async delete(id: number) {
    const book = await this.bookRepository.findOne(id);

    if (!book) {
      throw BookService.LIVRO_NAO_ENCONTRADO;
    }
    this.bookRepository.remove(book);
  }
}
