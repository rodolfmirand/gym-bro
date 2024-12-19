import { Controller, Get } from "@nestjs/common";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingFindAllService } from "src/services/bodybuilding.findall.service";
import { CardioFindAllService } from "src/services/cardio.findall.service";

@Controller('/exercise')
export class ExerciseFindAllController {

    constructor(private readonly bodybuildingService: BodybuildingFindAllService, private readonly cardioService: CardioFindAllService) { }

    @Get('/bodybuilding')
    public async findAllBodybuilding(): Promise<BodyBuildingExercise[]> {
        return this.bodybuildingService.findAll()
    }

    @Get('/cardio')
    public async findAllCardio(): Promise<CardioExercise[]> {
        return this.cardioService.findAll()
    }
}