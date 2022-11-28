import { IsString } from "class-validator";

export class AuthorRequest {

    @IsString()
    readonly name: string;

    @IsString()
    readonly nationality: string;
}
