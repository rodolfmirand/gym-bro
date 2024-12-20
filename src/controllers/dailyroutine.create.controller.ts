import { Body, Controller, Param, Post } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineCreateService } from "src/services/dailyroutine.create.service";

@Controller('/daily')
export class DailyRoutineCreateController {

    constructor(private readonly service: DailyRoutineCreateService) { }

    @Post('/:id')
    public async create(@Body() body: DailyRoutine, @Param('id') id: string): Promise<DailyRoutine> {
        return this.service.create(body, id)
    }
}