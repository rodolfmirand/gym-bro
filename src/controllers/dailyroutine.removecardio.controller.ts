import { Controller, Delete, Param, ParseUUIDPipe, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { DailyRoutineRemoveCardioService } from "src/services/dailyroutine.removecardio.service";

@Controller('/daily')
export class DailyRoutineRemoveCardioController {

    constructor(private readonly service: DailyRoutineRemoveCardioService) { }

    @UseGuards(AuthGuard)
    @Delete('/cardio/:id/:idCardio')
    public async remove(@Param('id', new ParseUUIDPipe()) id: string, @Param('idCardio', new ParseUUIDPipe()) idCardio: string): Promise<string> {
        return this.service.remove(id, idCardio)
    }
}