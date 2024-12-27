import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, ValidateIf } from "class-validator"
import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"

export class BodybuildingRequestDTO {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    description: string

    @IsEnum(MuscleGroupEnum)
    @IsNotEmpty()
    muscleGroup: MuscleGroupEnum

    @IsString()
    @IsOptional()
    equipment: string

    @IsNumber()
    @IsNotEmpty()
    sets: number

    @IsString()
    @IsNotEmpty()
    rest: string

    @IsNumber()
    @IsNotEmpty()
    load: number

    @IsNumber()
    @IsNotEmpty()
    reps: number

    @ValidateIf((obj) => obj.videoUrl !== null && obj.videoUrl !== "")
    @IsOptional()
    @IsUrl()
    videoUrl: string
}