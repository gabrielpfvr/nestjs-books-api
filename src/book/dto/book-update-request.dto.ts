import { PartialType } from '@nestjs/mapped-types';
import { BookRequest } from './book-request.dto';

export class BookUpdateRequest extends PartialType(BookRequest) {}
