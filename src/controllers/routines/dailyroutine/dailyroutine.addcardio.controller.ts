import { Controller, Param, ParseUUIDPipe, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";
import { DailyRoutineAddCardioService } from "src/services/routines/dailyroutine/dailyroutine.addcardio.service";

@Controller('daily')
export class DailyRoutineAddCardioController {

    constructor(private readonly service: DailyRoutineAddCardioService) { }

    @UseGuards(AuthGuard)
    @Post('cardio/:id/:idCardio')
    public async add(@Param('id', new ParseUUIDPipe()) id: string, @Param('idCardio') idCardio: string): Promise<any> {
        return this.service.add(id, idCardio)
    }
}