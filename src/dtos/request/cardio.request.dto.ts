import { IsEnum, IsNotEmpty, IsOptional, IsString, IsUrl, ValidateIf } from "class-validator";
import { CardioExerciseEnum } from "src/models/enum/cardioexercise.enum";

export class CardioRequestDTO {

    @IsNotEmpty()
    @IsEnum(CardioExerciseEnum)
    cardioExercise: CardioExerciseEnum

    @IsString()
    @IsOptional()
    description: string
    
    @IsString()
    @IsOptional()
    equipment: string
    
    @IsString()
    @IsOptional()
    time: string
    
    @ValidateIf((obj)=> obj.videoUrl !== null && obj.videoUrl !== "")
    @IsOptional()
    @IsUrl()
    videoUrl: string
}