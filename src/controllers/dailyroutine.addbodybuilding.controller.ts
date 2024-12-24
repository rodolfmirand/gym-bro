import { Controller, Param, Post } from "@nestjs/common";
import { DailyRoutineAddBodybuildingService } from "src/services/dailyroutine.addbodybuilding.service";

@Controller('/daily')
export class DailyRoutineAddBodybuildingController {

    constructor(private readonly service: DailyRoutineAddBodybuildingService) { }

    @Post('/bodybuilding/:id/:idBodybuilding')
    public async add(@Param('id') id: string, @Param('idBodybuilding') idBodybuilding: string): Promise<string> {
        return this.service.add(id, idBodybuilding)
    }
}