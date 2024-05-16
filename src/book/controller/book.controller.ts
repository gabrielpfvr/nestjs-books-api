import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from '../service/book.service';
import { BookRequest } from '../dto/book-request.dto';
import { BookUpdateRequest } from '../dto/book-update-request.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Post()
  create(@Body() updateRequest: BookRequest) {
    this.bookService.create(updateRequest);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequest: BookUpdateRequest) {
    this.bookService.update(+id, updateRequest);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.bookService.delete(+id);
  }
}
