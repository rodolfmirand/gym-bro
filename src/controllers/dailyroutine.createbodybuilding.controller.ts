import { Body, Controller, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { BodybuildingRequestDTO } from "src/dtos/request/bodybuilding.request.dto";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { DailyRoutineCreateBodybuildingService } from "src/services/dailyroutine.createbodybuilding.service";

@Controller('/daily')
export class DailyRoutineCreateBodybuildingController {

    constructor(private readonly service: DailyRoutineCreateBodybuildingService) { }

    @UseGuards(AuthGuard)
    @Post('/bodybuilding/:id')
    public async add(@Param('id', new ParseUUIDPipe()) id: string, @Body() body: BodybuildingRequestDTO): Promise<BodyBuildingExercise> {
        return this.service.add(id, body)
    }
}