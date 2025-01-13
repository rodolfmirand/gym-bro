import { Body, Controller, Param, ParseUUIDPipe, Put, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodybuildingRequestDTO } from "src/dtos/request/bodybuilding.request.dto";
import { CardioRequestDTO } from "src/dtos/request/cardio.request.dto";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { CardioExercise } from "src/models/cardioexercise.model";
import { BodybuildingUpdateService } from "src/services/bodybuilding.update.service";
import { CardioUpdateService } from "src/services/cardio.update.service";

@Controller('exercise')
export class ExerciseUpdateController {

    constructor(private readonly bodybuildingService: BodybuildingUpdateService, private readonly cardioService: CardioUpdateService) { }

    @UseGuards(AuthGuard)
    @Put('bodybuilding/:id')
    public async updateBodybuilding(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: BodybuildingRequestDTO): Promise<BodyBuildingExercise> {
        return this.bodybuildingService.update(id, body)
    }

    @UseGuards(AuthGuard)
    @Put('cardio/:id')
    public async updateCardio(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: CardioRequestDTO): Promise<CardioExercise> {
        return this.cardioService.update(id, body)
    }
}