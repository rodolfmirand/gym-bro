import { IsDateString, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class PersonRequestDTO {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(12)
    username: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    password: string

    @IsNumber()
    @IsNotEmpty()
    height: number

    @IsNumber()
    @IsNotEmpty()
    weight: number
    
    @IsDateString()
    @IsNotEmpty()
    birthDate: string

}