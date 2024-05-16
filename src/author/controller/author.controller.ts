import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AuthorService } from '../service/author.service';
import { AuthorRequest } from '../dto/author-request.dto';
import { AuthorUpdateRequest } from '../dto/author-update-request.dto';

@Controller('authors')
export class AuthorController {
  constructor(private readonly service: AuthorService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Post()
  create(@Body() updateRequest: AuthorRequest) {
    this.service.create(updateRequest);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequest: AuthorUpdateRequest) {
    this.service.update(+id, updateRequest);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.service.delete(+id);
  }
}
