import {
    IsNotEmpty,
    IsNumber,
    IsNumberString,
    IsString
} from "class-validator";


export class CreateBookDto {
    @IsNotEmpty()
    @IsNumberString()
    readonly id: number;

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly category: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsString()
    readonly country: string;

    @IsNotEmpty()
    @IsNumber()
    readonly yearPublic: number;


}
