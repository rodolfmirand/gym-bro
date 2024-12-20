import { Controller, Get } from "@nestjs/common";
import { DailyRoutine } from "src/models/dailyroutine.model";
import { DailyRoutineFindAllService } from "src/services/dailyroutine.findall.service";

@Controller('/daily')
export class DailyRoutineFindAllController {

    constructor(private readonly service: DailyRoutineFindAllService) { }

    @Get()
    public async find(): Promise<DailyRoutine[]> {
        return this.service.findAll()
    }
}