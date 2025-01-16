import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutineRemoveBodybuildingService } from "src/services/routines/dailyroutine/dailyroutine.removebodybuilding.service";

@Controller('daily')
export class DailyRoutineRemoveBodybuildingController {

    constructor(private readonly service: DailyRoutineRemoveBodybuildingService) { }

    @Delete('bodybuilding/:id/:idBodybuilding')
    public async remove(@Param('id', new ParseUUIDPipe()) id: string, @Param('idBodybuilding', new ParseUUIDPipe()) idBodybuilding): Promise<any> {
        return this.service.delete(id, idBodybuilding)
    }
}