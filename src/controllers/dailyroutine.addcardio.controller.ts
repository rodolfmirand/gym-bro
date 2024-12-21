import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { DailyRoutineAddCardioService } from "src/services/dailyroutine.addcardio.service";

@Controller('/daily')
export class DailyRoutineAddCardioController {

    constructor(private readonly service: DailyRoutineAddCardioService) { }

    @Post('/:id/:idDay')
    public async add(@Param('id') id: string, @Param('idDay') idDay: string, @Body() body: CardioExercise): Promise<CardioExercise> {
        return this.service.add(id, idDay, body)
    }
}