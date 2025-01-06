import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutineDeleteService } from "src/services/dailyroutine.delete.service";
import { DailyRoutineFindService } from "src/services/dailyroutine.find.service";

@Controller('daily')
export class DailyRoutineDeleteController {

    constructor(private readonly dailyRoutineDeleteService: DailyRoutineDeleteService,
        private readonly dailyRoutineFindService: DailyRoutineFindService
    ) { }

    @Delete(':id')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string): Promise<string> {
        await this.dailyRoutineFindService.find(id)
        return this.dailyRoutineDeleteService.delete(id)
    }
}