import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineFindByPersonIdService } from "src/services/routines/dailyroutine/dailyroutine.findbypersonid.service";

@Controller('daily')
export class DailyRoutineFindByPersonIdController {

    constructor(private readonly service: DailyRoutineFindByPersonIdService) { }

    @Get('findbyperson/:id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<DailyRoutine[]> {
        return this.service.findByPersonId(id)
    }
}