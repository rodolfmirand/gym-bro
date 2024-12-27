import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingCreateService } from "src/services/bodybuilding.create.service";
import { CardioCreateService } from "src/services/cardio.create.service";

@Controller('/exercise')
export class ExerciseCreateController {

    constructor(private readonly bodybuildingService: BodybuildingCreateService, private readonly cardioService: CardioCreateService) { }

    @UseGuards(AuthGuard)
    @Post('/bodybuilding')
    public async createBodybuilding(@Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        return this.bodybuildingService.create(body)
    }

    @UseGuards(AuthGuard)
    @Post('/cardio')
    public async createCardio(@Body() body: CardioExercise): Promise<CardioExercise> {
        return this.cardioService.create(body)
    }
}