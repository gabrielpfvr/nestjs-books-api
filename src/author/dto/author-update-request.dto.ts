import { PartialType } from '@nestjs/mapped-types';
import { AuthorRequest } from '../../author/dto/author-request.dto';

export class AuthorUpdateRequest extends PartialType(AuthorRequest) {}
