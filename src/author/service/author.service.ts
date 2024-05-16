import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorRequest } from '../dto/author-request.dto';
import { AuthorUpdateRequest } from '../dto/author-update-request.dto';
import { Author } from '../model/author.entity';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly repository: Repository<Author>,
  ) {}

  static readonly AUTOR_NAO_ENCONTRADO = new NotFoundException(
    `Autor não encontrado.`,
  );

  findAll() {
    return this.repository.find();
  }

  async findOne(id: number) {
    const author = await this.repository.findOne(id);
    if (!author) {
      throw AuthorService.AUTOR_NAO_ENCONTRADO;
    }
    return author;
  }

  create(request: AuthorRequest) {
    const author = this.repository.create(request);
    this.repository.save(author);
  }

  async update(id: number, updateRequest: AuthorUpdateRequest) {
    const author = await this.repository.preload({
      id,
      ...updateRequest,
    });
    if (!author) {
      throw AuthorService.AUTOR_NAO_ENCONTRADO;
    }
    this.repository.save(author);
  }

  async delete(id: number) {
    const author = await this.repository.findOne(id);

    if (!author) {
      throw AuthorService.AUTOR_NAO_ENCONTRADO;
    }
    this.repository.remove(author);
  }

  async findAuthorById(id: number): Promise<Author> {
    const author = await this.repository.findOne(id);

    if (!author) {
      throw AuthorService.AUTOR_NAO_ENCONTRADO;
    }

    return author;
  }
}
