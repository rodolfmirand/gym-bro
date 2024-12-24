import { Controller, Param, Post } from "@nestjs/common";
import { DailyRoutineAddCardioService } from "src/services/dailyroutine.addcardio.service";

@Controller('/daily')
export class DailyRoutineAddCardioController {

    constructor(private readonly service: DailyRoutineAddCardioService) { }

    @Post('/cardio/:id/:idCardio')
    public async add(@Param('id') id: string, @Param('idCardio') idCardio: string): Promise<string> {
        return this.service.add(id, idCardio)
    }
}