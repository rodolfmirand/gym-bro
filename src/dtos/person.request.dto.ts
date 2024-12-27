import { Expose } from "class-transformer"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"

export class PersonRequestDTO {

    @Expose()
    @IsString()
    @IsNotEmpty()
    name: string

    @Expose()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(12)
    username: string

    @Expose()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @Expose()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(16)
    password: string

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    height: number

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    weight: number
    
    @Expose()
    @IsString()
    @IsNotEmpty()
    birthDate: string

}