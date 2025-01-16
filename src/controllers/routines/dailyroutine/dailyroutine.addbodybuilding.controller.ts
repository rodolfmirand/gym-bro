import { Controller, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { DailyRoutineAddBodybuildingService } from "src/services/routines/dailyroutine/dailyroutine.addbodybuilding.service";

@Controller('daily')
export class DailyRoutineAddBodybuildingController {

    constructor(private readonly service: DailyRoutineAddBodybuildingService) { }

    @UseGuards(AuthGuard)
    @Post('bodybuilding/:id/:idBodybuilding')
    public async add(@Param('id', new ParseUUIDPipe()) id: string, @Param('idBodybuilding') idBodybuilding: string): Promise<any> {
        return this.service.add(id, idBodybuilding)
    }
}