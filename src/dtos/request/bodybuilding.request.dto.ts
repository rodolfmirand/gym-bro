import { Expose } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, ValidateIf } from "class-validator"
import { MuscleGroupEnum } from "src/models/enum/musclegroup.enum"

export class BodybuildingRequestDTO {

    @Expose()
    @IsString()
    @IsNotEmpty()
    name: string

    @Expose()
    @IsString()
    @IsOptional()
    description: string

    @Expose()
    @IsEnum(MuscleGroupEnum)
    @IsNotEmpty()
    muscleGroup: MuscleGroupEnum

    @Expose()
    @IsString()
    @IsOptional()
    equipment: string

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    sets: number

    @Expose()
    @IsString()
    @IsNotEmpty()
    rest: string

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    load: number

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    reps: number

    @Expose()
    @ValidateIf((obj) => obj.videoUrl !== null && obj.videoUrl !== "")
    @IsOptional()
    @IsUrl()
    videoUrl: string
}