import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineFindService } from "src/services/routines/dailyroutine/dailyroutine.find.service";

@Controller('daily')
export class DailyRoutineFindController {

    constructor(private readonly service: DailyRoutineFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<DailyRoutine>{
        return this.service.find(id)
    }
}