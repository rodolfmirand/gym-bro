import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutineDeleteService } from "src/services/dailyroutine.delete.service";

@Controller('daily')
export class DailyRoutineDeleteController {

    constructor(private readonly dailyRoutineDeleteService: DailyRoutineDeleteService) { }

    @Delete(':id/:idW')
    public async delete(@Param('id', new ParseUUIDPipe()) id: string, @Param('idW', new ParseUUIDPipe()) idWorkoutRoutine: string): Promise<string> {
        return this.dailyRoutineDeleteService.delete(id, idWorkoutRoutine)
    }
}