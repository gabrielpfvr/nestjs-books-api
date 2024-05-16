import { IsArray, IsNumber, IsString } from 'class-validator';

export class BookRequest {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly pages: number;

  @IsArray()
  readonly authorsIds: number[];
}
