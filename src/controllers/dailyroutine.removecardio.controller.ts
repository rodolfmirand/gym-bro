import { Controller, Delete, Param } from "@nestjs/common";
import { DailyRoutineRemoveCardioService } from "src/services/dailyroutine.removecardio.service";

@Controller('/daily')
export class DailyRoutineRemoveCardioController {

    constructor(private readonly service: DailyRoutineRemoveCardioService) { }

    @Delete('/cardio/:id/:idCardio')
    public async remove(@Param('id') id: string, @Param('idCardio') idCardio: string): Promise<string> {
        return this.service.remove(id, idCardio)
    }
}