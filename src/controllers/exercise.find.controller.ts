import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingFindService } from "src/services/bodybuilding.find.service";
import { CardioFindService } from "src/services/cardio.find.service";

@Controller('/exercise')
export class ExerciseFindController {

    constructor(private readonly bodybuildingService: BodybuildingFindService, private readonly cardioService: CardioFindService) { }

    @Get('/bodybuilding/:id')
    public async findBodybuilding(@Param('id', new ParseUUIDPipe()) id: string): Promise<BodyBuildingExercise> {
        return this.bodybuildingService.find(id)
    }

    @Get('/cardio/:id')
    public async findCardio(@Param('id', new ParseUUIDPipe()) id: string): Promise<CardioExercise> {
        return this.cardioService.find(id)
    }
}