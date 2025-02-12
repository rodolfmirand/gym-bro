import { IsArray, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { DietaryRestrictionsEnum } from "./enum/dietary.restrictions.enum";
import { ObjectiveEnum } from "./enum/objective.enum";
import { SpecificDietEnum } from "./enum/specific.diets.enum";
import { Expose } from "class-transformer";

export class Restrictions {
    @Expose()
    @IsArray()
    @IsEnum(DietaryRestrictionsEnum, { each: true })
    dietaryRestrictions: DietaryRestrictionsEnum[]

    @Expose()
    @IsEnum(SpecificDietEnum)
    diet: SpecificDietEnum

    @Expose()
    @IsArray()
    @IsEnum(ObjectiveEnum, { each: true })
    objectives: ObjectiveEnum[]
}