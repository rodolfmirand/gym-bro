import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CardioExercise } from "src/models/cardioexercise.model";
import { DailyRoutineCreateCardioService } from "src/services/dailyroutine.createcardio.service";

@Controller('/daily')
export class DailyRoutineCreateCardioController {

    constructor(private readonly service: DailyRoutineCreateCardioService) { }

    @Post('/cardio/:id')
    public async add(@Param('id') id: string, @Body() body: CardioExercise): Promise<CardioExercise> {
        return this.service.add(id, body)
    }
}