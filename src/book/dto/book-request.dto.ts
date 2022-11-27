import { IsString } from "class-validator";

export class BookRequest {

    @IsString()
    readonly name: string;

    @IsString()
    readonly author: string;
    
    @IsString({ each: true })
    readonly tags: string[];
}
