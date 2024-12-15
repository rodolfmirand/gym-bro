import { IsEmail, IsString, MaxLength } from "class-validator"

export class PersonSchema {
    @IsString()
    @MaxLength(100)
    public name: string

    @IsString()
    @MaxLength(100)
    @IsEmail()
    public email: string

    @IsString()
    @MaxLength(16)
    public password: string
}