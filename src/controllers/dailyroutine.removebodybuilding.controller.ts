import { Controller, Delete, Param, ParseUUIDPipe } from "@nestjs/common";
import { DailyRoutineRemoveBodybuildingService } from "src/services/dailyroutine.removebodybuilding.service";

@Controller('daily')
export class DailyRoutineRemoveBodybuildingController {

    constructor(private readonly service: DailyRoutineRemoveBodybuildingService) { }

    @Delete(':id/:idBodybuilding')
    public async remove(@Param('id', new ParseUUIDPipe()) id: string, @Param('idBodybuilding', new ParseUUIDPipe()) idBodybuilding) {
        return this.service.delete(id, idBodybuilding)
    }
}