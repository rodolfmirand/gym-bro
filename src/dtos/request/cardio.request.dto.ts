import { Expose } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, ValidateIf } from "class-validator";
import { CardioExerciseEnum } from "src/models/enum/cardioexercise.enum";

export class CardioRequestDTO {
    
    @Expose()
    @IsNotEmpty()
    @IsEnum(CardioExerciseEnum)
    cardioExercise: CardioExerciseEnum

    @Expose()
    @IsString()
    @IsOptional()
    description: string

    @Expose()
    @IsString()
    @IsOptional()
    equipment: string
    
    @Expose()
    @IsString()
    @IsOptional()
    time: string
    
    @Expose()
    @ValidateIf((obj)=> obj.videoUrl !== null && obj.videoUrl !== "")
    @IsOptional()
    @IsUrl()
    videoUrl: string
}