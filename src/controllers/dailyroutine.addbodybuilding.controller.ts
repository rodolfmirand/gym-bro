import { Body, Controller, Param, Post } from "@nestjs/common";
import { BodyBuildingExercise } from "src/models/bodybuildingexercise.model";
import { DailyRoutineAddBodybuildingService } from "src/services/dailyroutine.addbodybuilding.service";

@Controller('/daily')
export class DailyRoutineAddBodybuildingController {

    constructor(private readonly service: DailyRoutineAddBodybuildingService) { }

    @Post('/bodybuilding/:id/:idDay')
    public async add(@Param('id') id: string, @Param('idDay') idDay: string, @Body() body: BodyBuildingExercise): Promise<BodyBuildingExercise> {
        return this.service.add(id, idDay, body)
    }
}