import { Body, Controller, Param, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingUpdateService } from "src/services/bodybuilding.update.service";
import { CardioUpdateService } from "src/services/cardio.update.service";

@Controller('/exercise')
export class ExerciseUpdateController {

    constructor(private readonly bodybuildingService: BodybuildingUpdateService, private readonly cardioService: CardioUpdateService) { }

    @UseGuards(AuthGuard)
    @Put('/bodybuilding/:id')
    public async updateBodybuilding(@Param('id') id: string, @Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        return this.bodybuildingService.update(id, body)
    }

    @UseGuards(AuthGuard)
    @Put('/cardio/:id')
    public async updateCardio(@Param('id') id: string, @Body() body: CardioExercise): Promise<CardioExercise> {
        return this.cardioService.update(id, body)
    }
}