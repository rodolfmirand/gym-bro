import { Controller, Get } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingFindAllService } from "src/services/exercise/bodybuilding/bodybuilding.findall.service";
import { CardioFindAllService } from "src/services/exercise/cardio/cardio.findall.service";

@Controller('exercise')
export class CardioFindAllController {

    constructor(private readonly service: CardioFindAllService) { }

    @Get('cardio')
    public async findAll(): Promise<CardioExercise[]> {
        return this.service.findAll()
    }
}