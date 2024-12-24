import { Body, Controller, Param, Post } from "@nestjs/common";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { DailyRoutineCreateBodybuildingService } from "src/services/dailyroutine.createbodybuilding.service";

@Controller('/daily')
export class DailyRoutineCreateBodybuildingController {

    constructor(private readonly service: DailyRoutineCreateBodybuildingService) { }

    @Post('/bodybuilding/:id')
    public async add(@Param('id') id: string, @Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        return this.service.add(id, body)
    }
}