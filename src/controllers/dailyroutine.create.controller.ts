import { Body, Controller, Param, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineCreateService } from "src/services/dailyroutine.create.service";

@Controller('daily')
export class DailyRoutineCreateController {

    constructor(private readonly service: DailyRoutineCreateService) { }

    @UseGuards(AuthGuard)
    @Post(':id')
    public async create(@Body() body: DailyRoutine, @Param('id') id: string): Promise<DailyRoutine> {
        return this.service.create(body, id)
    }
}