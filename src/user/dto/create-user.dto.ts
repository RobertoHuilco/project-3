import {
    IsNotEmpty,
    IsNumber,
    IsNumberString,
    IsString
} from "class-validator";


export class CreateBookDto {
    @IsNotEmpty()
    @IsNumberString()
    readonly iduser: number;

    @IsNotEmpty()
    @IsString()
    readonly nombreuser: string;
}
